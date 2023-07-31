using System.Text;
using Microsoft.AspNetCore.Mvc;

namespace ICL.React.Frontend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        private static readonly HttpClient _httpClient = new HttpClient();
        private IConfiguration _configuration;

        public TokenController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpGet]
        public async Task<IActionResult> GetToken()
        {
            string clientId = _configuration["ClientId"];
            string secret = _configuration["Secret"];
            string apiUrl = _configuration["ApiURL"];
            string username = _configuration["username"];
            string password = _configuration["password"];

            // Concatenate clientId and secret with a colon in between
            string combinedString = clientId + ":" + secret;

            // Convert the combined string to a byte array
            byte[] bytes = Encoding.UTF8.GetBytes(combinedString);

            // Encode the byte array to a Base64 string
            string base64String = Convert.ToBase64String(bytes);

            // Create the payload data in JSON format
            string payload = $"{{ \"grant_type\": \"password\", \"username\": \"{username}\", \"password\": \"{password}\" }}";
            StringContent content = new StringContent(payload, Encoding.UTF8, "application/json");

            // Create the HttpClient and set the authorization header
            using (HttpClient httpClient = new HttpClient())
            {
                string base64Auth = Convert.ToBase64String(Encoding.UTF8.GetBytes($"{clientId}:{secret}"));
                httpClient.DefaultRequestHeaders.Authorization = new System.Net.Http.Headers.AuthenticationHeaderValue("Basic", base64Auth);

                try
                {
                    // Send the POST request and get the response
                    HttpResponseMessage response = await httpClient.PostAsync(apiUrl, content);

                    // Check if the response is successful
                    if (response.IsSuccessStatusCode)
                    {
                        // Read the response content as a string
                        string responseContent = await response.Content.ReadAsStringAsync();
                        return Ok(responseContent);
                    }
                    else
                    {
                        return StatusCode((int)response.StatusCode, "API request failed.");
                    }
                }
                catch (Exception ex)
                {
                    return BadRequest("An error occurred: " + ex.Message);
                }
            }
        }
    }
}

