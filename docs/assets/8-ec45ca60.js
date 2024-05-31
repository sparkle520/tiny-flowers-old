const l=`**解：**\r
\r
 (I) $|\\boldsymbol{A}-\\lambda \\boldsymbol{E}|=\\left|\\begin{array}{ccc}2-\\lambda & -1 & -1 \\\\\\\\\\\\ -1 & 2-\\lambda & -1 \\\\\\\\\\\\ -1 & -1 & 2-\\lambda\\end{array}\\right|=-\\lambda(3-\\lambda)^2=0, \\boldsymbol{A}$ 的特征值为 $\\lambda_1=0, \\lambda_2=\\lambda_3=3$.\r
\r
当 $\\lambda_1=0$ 时, 有 $\\boldsymbol{A}-0 \\boldsymbol{E}=\\boldsymbol{A} \\sim\\left(\\begin{array}{ccc}1 & 0 & -1 \\\\ 0 & 1 & -1 \\\\ 0 & 0 & 0\\end{array}\\right)$, 特征向量 $\\boldsymbol{\\xi}_1=\\left(\\begin{array}{l}1 \\\\ 1 \\\\ 1\\end{array}\\right)$, 单位化 $\\boldsymbol{e}_1=\\frac{1}{\\sqrt{3}}\\left(\\begin{array}{l}1 \\\\ 1 \\\\ 1\\end{array}\\right)$;\r
\r
当 $\\lambda_2=3$ 时,有 $\\boldsymbol{A}-3 \\boldsymbol{E} \\sim\\left(\\begin{array}{lll}1 & 1 & 1 \\\\\\\\\\\\ 0 & 0 & 0 \\\\\\\\\\\\ 0 & 0 & 0\\end{array}\\right)$, 特征向量 $\\boldsymbol{\\xi}_2=\\left(\\begin{array}{c}-1 \\\\\\\\\\\\ 1 \\\\\\\\\\\\ 0\\end{array}\\right), \\boldsymbol{\\xi}_3=\\left(\\begin{array}{c}-1 \\\\\\\\\\\\ 0 \\\\\\\\\\\\ 1\\end{array}\\right)$, 正交单位化为 $\\boldsymbol{e}_2=\\frac{1}{\\sqrt{2}}\\left(\\begin{array}{c}-1 \\\\\\\\\\\\ 1 \\\\\\\\\\\\ 0\\end{array}\\right)$, $\\boldsymbol{e}_3=\\frac{1}{\\sqrt{6}}\\left(\\begin{array}{c}1 \\\\\\\\\\\\ 1 \\\\\\\\\\\\ -2\\end{array}\\right)$, 所以 $\\boldsymbol{Q}=\\left(\\begin{array}{ccc}\\frac{1}{\\sqrt{3}} & \\frac{-1}{\\sqrt{2}} & \\frac{1}{\\sqrt{6}} \\\\\\\\\\\\ \\frac{1}{\\sqrt{3}} & \\frac{1}{\\sqrt{2}} & \\frac{1}{\\sqrt{6}} \\\\\\\\\\\\ \\frac{1}{\\sqrt{3}} & 0 & \\frac{-2}{\\sqrt{6}}\\end{array}\\right)$.\r
\r
\r
<!-- （II) 令 $\\boldsymbol{X}=\\left(\\boldsymbol{x}_1, \\boldsymbol{x}_2\\right)$, 则 $\\boldsymbol{X}^{\\mathrm{T}} \\boldsymbol{A} \\boldsymbol{X}=\\left(\\boldsymbol{x}_1, \\boldsymbol{x}_2\\right)^{\\mathrm{T}} \\boldsymbol{A}\\left(\\boldsymbol{x}_1, \\boldsymbol{x}_2\\right)=\\left(\\begin{array}{ll}\\boldsymbol{x}_1^{\\mathrm{T}} \\boldsymbol{A} \\boldsymbol{x}_1 & \\boldsymbol{x}_1^{\\mathrm{T}} \\boldsymbol{A} \\boldsymbol{x}_2 \\\\\\\\\\\\ \\boldsymbol{x}_2^{\\mathrm{T}} \\boldsymbol{A} \\boldsymbol{x}_1 & \\boldsymbol{x}_2^{\\mathrm{T}} \\boldsymbol{A} \\boldsymbol{x}_2\\end{array}\\right)=\\left(\\begin{array}{ll}0 & 0 \\\\\\\\\\\\ 0 & 0\\end{array}\\right) \\cdot \\boldsymbol{x}_1^{\\mathrm{T}} \\boldsymbol{A} \\boldsymbol{x}_1=0$, 因为 $\\boldsymbol{Q}^{\\mathrm{T}} \\boldsymbol{A} \\boldsymbol{Q}=\\boldsymbol{\\Lambda}$, 即 $\\boldsymbol{A}=\\boldsymbol{Q} \\boldsymbol{\\Lambda} \\boldsymbol{Q}^{\\mathrm{T}}$, 代人 $\\boldsymbol{x}_1^{\\mathrm{T}} \\boldsymbol{A} \\boldsymbol{x}_1=0$, 得\r
$$\r
\\left(\\boldsymbol{Q}^{\\mathrm{T}} \\boldsymbol{x}_1\\right)^{\\mathrm{T}} \\boldsymbol{\\Lambda}\\left(\\boldsymbol{Q}^{\\mathrm{T}} \\boldsymbol{x}_1\\right)=0 .\r
$$\r
\r
令 $\\boldsymbol{y}=\\boldsymbol{Q}^{\\mathrm{T}} \\boldsymbol{x}_1$, 即 $\\boldsymbol{y}^{\\mathrm{T}} \\boldsymbol{\\Lambda} \\boldsymbol{y}=0$, 若 $\\boldsymbol{y}=\\left(\\begin{array}{l}y_1 \\\\\\\\\\\\ y_2 \\\\\\\\\\\\ y_3\\end{array}\\right)$, 有 $0 \\cdot y_1^2+3 y_2^2+3 y_3^2=0$, 故\r
$$\r
\\boldsymbol{y}=\\left(\\begin{array}{c}\r
k_1 \\\\\\\\\\\\\r
0 \\\\\\\\\\\\\r
0\r
\\end{array}\\right), \\quad k_1 \\in \\mathbb{R}\r
$$\r
\r
从而 $\\boldsymbol{x}_1=\\boldsymbol{Q} \\boldsymbol{y}=\\frac{k_1}{\\sqrt{3}}\\left(\\begin{array}{l}1 \\\\\\\\\\\\ 1 \\\\\\\\\\\\ 1\\end{array}\\right) \\triangleq\\left(\\begin{array}{l}k_1 \\\\\\\\\\\\ k_1 \\\\\\\\\\\\ k_1\\end{array}\\right), k_1 \\in \\mathbb{R}$.\r
类似的, 由 $\\boldsymbol{x}_2^{\\mathrm{T}} \\boldsymbol{A} \\boldsymbol{x}_2=0$, 可求得 $\\boldsymbol{x}_2=\\boldsymbol{Q} \\boldsymbol{y}=\\frac{k_2}{\\sqrt{3}}\\left(\\begin{array}{l}1 \\\\\\\\\\\\ 1 \\\\\\\\\\\\ 1\\end{array}\\right) \\triangleq\\left(\\begin{array}{l}k_2 \\\\\\\\\\\\ k_2 \\\\\\\\\\\\ k_2\\end{array}\\right), k_2 \\in \\mathbb{R}$.\r
由上可知, $\\boldsymbol{x}_2=k \\boldsymbol{x}_1$, 所以\r
$$\r
\\boldsymbol{x}_1^{\\mathrm{T}} \\boldsymbol{A} \\boldsymbol{x}_2=\\boldsymbol{x}_2^{\\mathrm{T}} \\boldsymbol{A} \\boldsymbol{x}_1=k \\boldsymbol{x}_1^{\\mathrm{T}} \\boldsymbol{A} \\boldsymbol{x}_1=0,\r
$$\r
\r
故对任意的 $k_1, k_2, \\boldsymbol{X}=\\left(\\boldsymbol{x}_1, \\boldsymbol{x}_2\\right)=\\left(\\begin{array}{ll}k_1 & k_2 \\\\\\\\\\\\ k_1 & k_2 \\\\\\\\\\\\ k_1 & k_2\\end{array}\\right), k_1, k_2 \\in \\mathbb{R}$, 满足 $\\boldsymbol{X}^{\\mathrm{T}} \\boldsymbol{A X}=\\boldsymbol{O}$.\r
当 $k_1=k_2=0$ 时, $r(\\boldsymbol{X})=0$, 当 $k_1, k_2$ 不全为 0 时, $r(\\boldsymbol{X})=1$. -->`;export{l as default};
