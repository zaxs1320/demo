using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;

namespace MyWebQQ
{
    static class Program
    {
        /// <summary>
        /// 应用程序的主入口点。
        /// </summary>
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);
            FormLogin FL = new FormLogin();
            if (FL.ShowDialog() == DialogResult.OK)
            {
                Application.Run(new FormMain(FL.QH));
            }
        }
    }
}
