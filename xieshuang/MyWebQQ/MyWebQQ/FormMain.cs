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
    public partial class FormMain : Form
    {
        public QQHelper.QQHelp QH;
        public FormMain(QQHelper.QQHelp _QH)
        {
            this.QH = _QH;
            InitializeComponent();
        }

        private void FormMain_Load(object sender, EventArgs e)
        {

        }
    }
}
