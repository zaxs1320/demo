using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.RegularExpressions;

namespace MyWebQQ.Common
{
    class MatchHelp
    {
        public static string GetValue(string input, string pattern)
        {
            Match m = Regex.Match(input, pattern);
            return m.Value;
        }
        public static List<string> GetValues(string input, string pattern)
        {
            MatchCollection MC = Regex.Matches(input, pattern);
            return MC.Cast<Match>().Select(n => n.Value).ToList();
        }

        public static List<string> GetGroup(string input, string pattern)
        {
            Match m = Regex.Match(input, pattern);
            return m.Groups.Cast<Group>().Select(n => n.Value).ToList();
        }

        public static List<List<string>> GetGroups(string input, string pattern)
        {
            MatchCollection MC = Regex.Matches(input, pattern);
            return MC.Cast<Match>().Select(n => n.Groups.Cast<Group>().Select(m => m.Value).ToList()).ToList();
        }
    }
}
