module.exports = 
{
	"LOCAL_PROXY_SERVER":
	{
		"ADDRESS": "127.0.0.1",
		"PORT": 1080
	},
	"REMOTE_PROXY_SERVERS":
	[
		{
			"TYPE": "HTTPS",
			"ADDRESS": "127.0.0.1",
			"PORT": 443,
			"AUTHENTICATION":
			{
				"USERNAME": "1",
				"PASSWORD": "1"
			},
			"CERTIFICATE":
			{
				"AUTHENTICATION":
				{
					"FILE": "CA.pem"
				}
			}
		}
	]
}