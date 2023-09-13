public class WebServiceDemo 
{
    private readonly HttpClient _httpClient;
    private readonly string _endPointBaseUrl;

    public WebServiceDemo(HttpClient httpClient, IConfiguration config) 
    {
        _httpClient = httpClient;
        _endPointBaseUrl = config["ThirdParty.BaseUrl"];
    }

    public async Task<SomethingResponse> GetSomethingFromSomewhereAsync(RequestPayload request)
    {
        var queryStringPayload = ToQueryString(request);
        var endPointFullUrl = $"{_endPointBaseUrl}/somewhere/something?{queryStringPayload}";

        return await GetRequestAsync<SomethingResponse>(endPointFullUrl);
    }

    public async Task<SomethingResponse> SendSomethingAsync(RequestPayload request)
    {
        var endPointFullUrl = $"{_endPointBaseUrl}/somewhere/something";

        return await PostRequestAsync<SomethingResponse>(endPointFullUrl, request);
    }

    private async Task<T> GetRequestAsync(string url) where T : ApiResponseBase, new() 
    {
        var response = new T();
        try 
        {
            var httpResponse = await _httpClient.GetAsync(url).ConfigureAwait(false);

            httpResponse.EnsureSuccessStatusCode();
            var responseContent = httpResponse.Content.ReadAsStringAsync().ConfigureAwait(false);    
            response = JsonSerializer.Deserialize<T>(responseContent);
        }
        catch(Exception ex)
        {
            response.ErrorMessage = ex.Message;
        }

        return response;
    }

    private async Task<TReponse, TRequest> PostRequestAsync(string url, TRequest request) 
        where TResponse : ApiResponseBase, new(),
        where TRequest : ApiRequestBase 
    {
        var response = new TResponse();
        
        try 
        {
            var jsonRequestContent = JsonSerializer.Serialize(request);
            var httpContent = new StringContent(jsonRequestContent, System.Text.Encoding.UTF8, "application/json");

            var httpResponse = await _httpClient.PostAsync(url, httpContent).ConfigureAwait(false);
        
            httpResponse.EnsureSuccessStatusCode();

            var responseContent = await httpResponse.Content.ReadAsStringAsync().ConfigureAwait(false);
            response = JsonSerializer.Deserialize<TResponse>(responseContent);
        }
        catch(Exception ex) 
        {
            response.ErrorMessage = ex.Message;
        }

        return response;
    }

    private string ToQueryString(object obj)
    {
        var properties = obj.GetType().GetProperties()
                        .Where(p => p.GetValue(obj, null) != null)
                        .Select(p => $"{p.Name}={Uri.EscapeDataString(p.GetValue(obj, null).ToString())}");

        return String.Join("&", properties.ToArray());
    }
}

public class ApiResponseBase
{
    public string ErrorMessage { get;set; }
    public bool IsSuccessful => string.IsNullOrEmpty(ErrorMessage);
}

public class ApiRequestBase 
{

}

public class SomethingResponse : ApiResponse 
{

}