using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;

namespace MyWebQQ.Common
{
    class CookieHelp
    {
        public static string GetCookieValue(CookieCollection collection, string cookieName)
        {
            Cookie cookie = collection.Cast<Cookie>().FirstOrDefault(n => n.Name.Equals(cookieName, StringComparison.OrdinalIgnoreCase));
            if (cookie == null)
                return string.Empty;
            return cookie.Value;
        }
    }
}
