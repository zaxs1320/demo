using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace MyWebQQ
{
    public partial class FormLogin : Form
    {
        public QQHelper.QQHelp QH;

        public FormLogin()
        {
            InitializeComponent();
        }

        private void FormLogin_Load(object sender, EventArgs e)
        {
            this.QH = new QQHelper.QQHelp();
            this.QH.Error += QH_Error;
            this.QH.NeedCode += QH_NeedCode;
        }

        void QH_NeedCode(object sender, QQHelper.NeedCodeEventArgs e)
        {
            this.pbVerifyCode.Image = e.Image;
        }

        void QH_Error(object sender, QQHelper.ErrorEventArgs e)
        {
            if (e.Error.Equals("登陆成功"))
            {
                this.DialogResult = DialogResult.OK;
            }
            else
            {
                MessageBox.Show(e.Error);
            }
        }

        private void btnLogin_Click(object sender, EventArgs e)
        {
            this.QH.QQNum = this.tbNum.Text.Trim();
            bool ifNeedCode = this.QH.CheckQQNum();
            if (ifNeedCode)
            {
                MessageBox.Show("不需要验证码");
            }
            else
            {
                MessageBox.Show("需要验证码，已经获取");
            }
        }
    }
}
