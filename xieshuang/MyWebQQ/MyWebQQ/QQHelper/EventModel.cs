using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace MyWebQQ.QQHelper
{
    public class ErrorEventArgs : EventArgs
    {
        /// <summary>
        /// 错误信息
        /// </summary>
        public string Error { get; set; }
    }

    public class NeedCodeEventArgs : EventArgs
    {
        /// <summary>
        /// 验证码图片
        /// </summary>
        public System.Drawing.Image Image { get; set; }
    }

    public class PollEventArgs : EventArgs
    {
        /// <summary>
        /// 消息类型 1-个人消息 2-群消息
        /// </summary>
        public int PollType { get; set; }

        /// <summary>
        /// 来源编号
        /// </summary>
        public string FromUin { get; set; }

        /// <summary>
        /// 发送人编号
        /// </summary>
        public string SendUin { get; set; }

        /// <summary>
        /// 发送人名称/群名称
        /// </summary>
        public string FromName { get; set; }

        /// <summary>
        /// 发送内容
        /// </summary>
        public string Content { get; set; }

    }
}
