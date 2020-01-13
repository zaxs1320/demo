using System;
using System.Collections.Generic;
using System.Drawing;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;

namespace MyWebQQ.Common
{
    public class HttpHelp
    {
        public CookieContainer CookieContainer { get; set; }

        public CookieCollection CookieCollection { get; set; }

        public HttpHelp()
        {
            this.CookieCollection = new CookieCollection();
            this.CookieContainer = new CookieContainer();
        }


        public string GetHtml(string url, string Referer, Encoding encode, bool SaveCookie)
        {
            HttpWebRequest req = WebRequest.Create(url) as HttpWebRequest;
            req.Method = "GET";
            req.CookieContainer = this.CookieContainer;
            req.Proxy = null;
            if (!string.IsNullOrEmpty(Referer))
                req.Referer = Referer;
            using (HttpWebResponse hwr = req.GetResponse() as HttpWebResponse)
            {
                if (SaveCookie)
                {
                    this.CookieCollection = hwr.Cookies;
                    this.CookieContainer.GetCookies(req.RequestUri);
                }
                using (StreamReader SR = new StreamReader(hwr.GetResponseStream(), encode))
                {
                    return SR.ReadToEnd();
                }
            }
        }

        public static string GetHtml(string url, string Referer, Encoding encode)
        {
            return new HttpHelp().GetHtml(url, Referer, encode, false);
        }

        public string PostHtml(string url, string Referer, string data, Encoding encode, bool SaveCookie)
        {
            HttpWebRequest req = WebRequest.Create(url) as HttpWebRequest;
            req.CookieContainer = this.CookieContainer;
            req.ContentType = "application/x-www-form-urlencoded";
            req.Method = "POST";
            req.UserAgent = "Mozilla/5.0 (Windows NT 5.1; rv:30.0) Gecko/20100101 Firefox/30.0";
            req.Proxy = null;
            req.ProtocolVersion = HttpVersion.Version10;
            if (!string.IsNullOrEmpty(Referer))
                req.Referer = Referer;
            byte[] mybyte = Encoding.Default.GetBytes(data);
            req.ContentLength = mybyte.Length;
            using (Stream stream = req.GetRequestStream())
            {
                stream.Write(mybyte, 0, mybyte.Length);
            }
            using (HttpWebResponse hwr = req.GetResponse() as HttpWebResponse)
            {
                if (SaveCookie)
                {
                    this.CookieCollection = hwr.Cookies;
                    this.CookieContainer.GetCookies(req.RequestUri);
                }
                using (StreamReader SR = new StreamReader(hwr.GetResponseStream(), encode))
                {
                    return SR.ReadToEnd();
                }
            }
        }

        public Image getImage(string url, string Referer, bool SaveCookie)
        {
            HttpWebRequest req = WebRequest.Create(url) as HttpWebRequest;
            req.Method = "GET";
            req.CookieContainer = this.CookieContainer;
            req.Proxy = null;
            if (!string.IsNullOrEmpty(Referer))
                req.Referer = Referer;
            using (HttpWebResponse hwr = req.GetResponse() as HttpWebResponse)
            {
                if (SaveCookie)
                {
                    this.CookieCollection = hwr.Cookies;
                    this.CookieContainer.GetCookies(req.RequestUri);
                }
                return Image.FromStream(hwr.GetResponseStream());
            }
        }
    }
}
