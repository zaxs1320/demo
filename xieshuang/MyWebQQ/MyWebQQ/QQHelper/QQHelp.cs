using MyWebQQ.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading;
using System.Windows.Forms;
using MyWebQQ.QQHelper;

namespace MyWebQQ.QQHelper
{
    public class QQHelp
    {
        #region 全局参数
        public string NickName { get; set; }  //昵称 

        private string CodeString;  //验证码

        private string QQUin;         //QQ号码十六进制

        public string QQNum { get; set; }       //QQ号码

        private string QQPsw;         //QQ密码

        private string VerifySession;//验证码返回cookie参数值

        private string PtWebQQ;

        private string ClientID = "29528327";

        private string VfWebQQ;       //QQ令牌

        private string PSessionID;    //QQ令牌

        private string Hash;

        private WebBrowser WB = new WebBrowser(); //webbrowser 控件，用于执行js，针对 32，64位的win7，win8无需考虑兼容性

        public HttpHelp HP = new HttpHelp();  // http 辅助类

        private Thread PollThread;          // 接受消息的线程 

        private int MsgId = 76520000;   //消息id
        #endregion

        #region  定义错误事件 Error  -onError(ErrorEventArgs e)
        public delegate void ErrorEventHandler(object sender, ErrorEventArgs e);
        public event ErrorEventHandler Error;
        private void onError(ErrorEventArgs e)
        {
            if (Error != null) Error(this, e);
        }
        #endregion

        #region  定义需要验证码的事件 NeedCode -onNeedCode(NeedCodeEventArgs e)
        public delegate void NeedCodeEventHandler(object sender, NeedCodeEventArgs e);
        public event NeedCodeEventHandler NeedCode;
        private void onNeedCode(NeedCodeEventArgs e)
        {
            if (NeedCode != null) NeedCode(this, e);
        }
        #endregion

        #region 构造函数和构析函数
        public QQHelp()
        {
            string path = System.IO.Path.GetFullPath("webqq.html");
            this.WB.Navigate(path);
            //this.WB.DocumentText =
            //  "<html><head><script type='text/javascript' src='http://www.qqxieyi.com/function/encodepwd.js' ></script></head></html>";
        }

        ~QQHelp()
        {
            if (this.PollThread != null && this.PollThread.IsAlive)
            {
                this.PollThread.Abort();
            }
        }
        #endregion


        /// <summary>
        /// 检查QQ是否需要验证码，并获取参数
        /// </summary>
        /// <returns></returns>
        public bool CheckQQNum()
        {
            string url = "https://ssl.ptlogin2.qq.com/check?uin=" + this.QQNum + "&appid=501004106&js_ver=10095&js_type=0&login_sig=a9NQ-9*PnzKFxzP7jcE7voRx5Z9x6Khffy44FKhIkaD-n8fShtaK1r1GZRjgsxzA&u1=http%3A%2F%2Fw.qq.com%2Fproxy.html&r=0.6158497643191367";
            string html = this.HP.GetHtml(url, null, Encoding.UTF8, true);
            string pattern = @"(?<=')[^,]*?(?=')";
            List<string> para = MatchHelp.GetValues(html, pattern);

            if (para[0] == "0")  // 如果无需验证码
            {
                this.CodeString = para[1];
                this.QQUin = para[2];
                this.VerifySession = para[3];
                return true;
            }
            else                // 需要验证码
            {
                string imageUrl = "https://ssl.captcha.qq.com/getimage?aid=501004106&r=0.8478438374586403&uin=" + this.QQNum;
                string imageReferer = "https://ui.ptlogin2.qq.com/cgi-bin/login?daid=164&target=self&style=16&mibao_css=m_webqq&appid=501004106&enable_qlogin=0&no_verifyimg=1&s_url=http%3A%2F%2Fw.qq.com%2Fproxy.html&f_url=loginerroralert&strong_login=1&login_state=10&t=20131024001";

                // 获取验证码
                System.Drawing.Image image = this.HP.getImage(imageUrl, imageReferer, true);

                //获取verifysession 和 uin
                this.VerifySession = CookieHelp.GetCookieValue(this.HP.CookieCollection, "verifysession");

                if (string.IsNullOrEmpty(VerifySession))
                {
                    onError(new ErrorEventArgs() { Error = "找不到verifysession..." });
                    return false;
                }
                this.QQUin = para[2];

                //通知显示验证码
                onNeedCode(new NeedCodeEventArgs() { Image = image });

                return false;
            }
        }
    }
}
