const n=`# 第一章 函数与极限  \r
\r
> [引言]  \r
> 本章节不提供详细的知识点  \r
\r
## 关于函数的奇偶性 \r
\r
1. 奇$×$奇$=$偶\r
2. 奇$×$偶$=$奇  \r
3. 奇$+$奇$=$奇\r
4. 偶$×$偶$=$偶\r
5. 奇复合奇$=$奇  \r
6. 偶复合偶$=$偶\r
7. 偶复合奇$=$偶  \r
8. 任一定义在对称与原点的数集$X$上的函数$f(x)$，必可分解成**一奇一偶**函数之和  \r
\r
$$\r
f(x)=\\frac{1}{2}[f(x)-f(-x)]+\\frac{1}{2}[f(x)+f(-x)].\r
$$\r
\r
## 关于函数极限与无穷小关系  \r
\r
$$\r
\\lim_{x \\to x_0}f(x)=A\\quad\\\\iff\\quad f(x)=A+\\alpha(x)\\quad(其中A为常数,\\alpha(x)为无穷小).\r
$$ \r
\r
> **[证]** \r
> \r
> 先证充分性   \r
> 设$\\displaystyle\\lim_{x\\to x_0}f(x)=A$，由函数极限的定义有，对$\\forall\\epsilon>0$，$\\exists\\delta>0$，使得当$0<|x-x_0|<\\delta$时，有$|f(x)-A|<\\epsilon$.不妨令$\\alpha(x)=f(x)-A$，则$\\alpha(x)$为$x\\to x_0$时的无穷小.且有$f(x)=A+\\alpha(x)$. \r
> \r
> 再证必要性   \r
>  设$f(x)=A+\\alpha(x)$，则有$|f(x)-A|=|\\alpha(x)|$，由于当$x\\to x_0$时，$\\alpha(x)$为无穷小，由函数极限的定义可知，对$\\forall\\epsilon>0$，$\\exists\\delta>0$，使得当$0<|x-x_0|<\\delta$时，有$|\\alpha(x)|<\\epsilon$，即$|f(x)-A|<\\epsilon$，得证. \r
\r
**<例题1>**  \r
\r
设$f(x)$在$a$点处连续，且有$\\displaystyle\\lim_{x\\to a}\\frac{f(x)}{x-a}=k.$证明：$f(x)$在$a$点处可导，且$\\displaystyle\\lim_{x\\to a}f'(x)=k$.  \r
\r
**[证]** \r
\r
由函数极限与无穷小关系可知，存在无穷小量$\\alpha(x)$，使得$f(x)=k(x-a)+(x-a)\\alpha(x)$，\r
\r
继而可得$\\displaystyle\\lim_{x\\to a}f(x)=0$，又由于$f(x)$在$a$点处连续，故$f(a)=0$.\r
\r
则$\\displaystyle\\lim_{x\\to a}\\frac{f(x)}{x-a}=\\displaystyle\\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}=k$  得证.\r
\r
## 关于极限的保号性 \r
\r
设$\\displaystyle\\lim_{x\\to x_0}f(x)=A$，且$A≠0$，则存在一个$x_0$的去心领域，使得在该领域内，$f(x)$的符号与$A$相同.  \r
\r
> **[证]** \r
> \r
> 设$A>0$，由于$\\displaystyle\\lim_{x\\to x_0}f(x)=A$，则对$\\forall\\epsilon>0$，$\\exists\\delta>0$，使得当$0<|x-x_0|<\\delta$时，有$|f(x)-A|<\\epsilon$，即$A-\\epsilon<f(x)<A+\\epsilon$，不妨取$\\epsilon=\\frac{A}{2}>0$，则$f(x)>A-\\frac{A}{2}>0$.\r
> \r
> 同理可证$A<0$. \r
\r
> [注] \r
> \r
> $f(x)>0\\nRightarrow A>0$，(其中$A$为极限值)  \r
> \r
> 考虑函数$f(x)=e^x$，易知$f(x)>0$，但当$x\\to -\\infty$时，$f(x)$的极限为$0$.故要添加等号使之成立，即$f(x)>0\\Rightarrow A≥0$，由此得到推论. \r
\r
### 极限的保号性推论 \r
\r
设存在一个$x_0$的去心领域，在该领域内$f(x)≥0$或$(≤0)$，且$\\displaystyle\\lim_{x\\to x_0}$存在且等于$A$，则$A≥0$或$(A≤0)$. \r
>[注] 当$f(x)>0$或($f(x)<0$)时，仍成立. \r
\r
**<例题2>** \r
\r
设$\\displaystyle\\lim_{x\\to 0}\\frac{f'(x)}{x}=1>0$，判断$x=0$是否为极值点? \r
\r
**[解]** \r
\r
$\\displaystyle\\lim_{x\\to 0}\\frac{f'(x)}{x}=\\displaystyle\\lim_{x\\to 0}\\frac{f(x)-f(0)}{x^2}$，\r
由于$x^2>0$，再由极限的保号性可知，存在$0$点处的一个去心领域，有$f(x)-f(0)>1>0$，即$f(x)>f(x_0)$，由极值点定义可知，$x=0$为极小值点.\r
\r
## 关于常见的无穷大比较 \r
\r
当$n\\to \\infty$时 \r
\r
$$\r
{ln^{\\alpha}n}<<n^{\\beta}<<a^n<<n!<<n^n\\quad(其中\\alpha>0,\\beta>0,a>1).\r
$$ \r
\r
## 关于常用的无穷小代换 \r
\r
当$x\\to 0$时 \r
\r
$x\\sim sinx\\sim tanx\\sim arcsinx\\sim arctanx\\sim ln(1+x) \\sim e^x-1\\quad$ \r
\r
$1-cosx\\sim \\displaystyle\\frac{1}{2}x^2\\quad (1+x)^a-1\\sim ax$ \r
\r
$x-ln(1+x)\\sim\\displaystyle\\frac{1}{2}x^2$\r
\r
$x-sinx\\sim \\displaystyle\\frac{1}{6}x^3\\quad tax-x\\sim \\displaystyle\\frac{1}{3}x^3$ \r
\r
$arcsinx-x\\sim \\displaystyle\\frac{1}{6}x^3\\quad x-arctanx\\sim \\displaystyle\\frac{1}{3}x^3$ \r
\r
> [注] 对$x-sinx\\sim \\displaystyle\\frac{1}{6}x^3$中的$x$令其为$arcsint$不难得出$arcsinx-x\\sim \\displaystyle\\frac{1}{6}x^3$，同理可得$x-arctanx$.\r
\r
## 关于加减时等价无穷小替换原则  \r
\r
当$x\\to x_0$时，若$\\alpha\\sim\\alpha_1,\\beta\\sim \\beta_1$ 且 $\\displaystyle\\lim_{x\\to  x_0}\\frac{\\alpha}{\\beta}$存在，则有 \r
\r
若$\\displaystyle\\lim_{x\\to  x_0}\\frac{\\alpha}{\\beta}≠1$，则有$\\alpha-\\beta\\sim\\alpha_1-\\beta_1$\r
\r
若$\\displaystyle\\lim_{x\\to  x_0}\\frac{\\alpha}{\\beta}≠-1$，则有$\\alpha+\\beta\\sim\\alpha_1+\\beta_1$\r
\r
> **[证]** \r
> \r
> $\\displaystyle\\lim_{x\\to  x_0}\\frac{\\alpha-\\beta}{\\alpha_1-\\beta_1}=\\displaystyle\\lim_{x\\to  x_0}\\displaystyle\\frac{\\displaystyle\\frac{\\alpha}{\\beta}-1}{\\displaystyle\\frac{\\alpha_1}{\\beta}-\\frac{\\beta_1}{\\beta}}=\\displaystyle\\lim_{x\\to  x_0}\\displaystyle\\frac{A-1}{\\displaystyle\\frac{\\alpha_1}{\\beta}-\\frac{\\beta_1}{\\beta}}$，注意到分母极限为$A-1≠0$，故$\\displaystyle\\lim_{x\\to  x_0}\\frac{\\alpha-\\beta}{\\alpha_1-\\beta_1}=1$，由等价无穷小定义可知$\\alpha-\\beta\\sim\\alpha_1-\\beta_1$.\r
> \r
> 同理可得$\\alpha+\\beta\\sim\\alpha_1+\\beta_1$. \r
\r
> [注] \r
> \r
> 实际做题中先等价代换，看相加减是否等于$0$，如果不等于$0$直接代换即可，如果等于$0$，可以考虑泰勒展开、洛必达或对式子变形等.\r
\r
**<例题3>** \r
\r
求极限$\\displaystyle\\lim_{x\\to 0}\\frac{x-ln(1+tanx)}{sin^2x}$. \r
\r
**[解]** \r
\r
原式$=\\displaystyle\\lim_{x\\to 0}\\frac{x-tanx-[ln(1+tanx)-tanx]}{x^2}$ \r
\r
&emsp;&emsp;$=\\displaystyle\\lim_{x\\to 0}\\frac{-\\frac{1}{3}x^3-(-\\frac{1}{2}tan^2x)}{x^2}$\r
\r
&emsp;&emsp;$=0+\\displaystyle\\frac{1}{2}=\\displaystyle\\frac{1}{2}.$\r
\r
> [注] 极限存在是可以拆开的. \r
\r
## 关于极限运算定理  \r
\r
对于两个极限都存在的情形不在此说明\r
\r
存在$±$不存在$=$不存在 \r
\r
对于两个都不存在(分别设为$f(x),g(x)$)，则有$f(x)+g(x),f(x)-g(x)$不能同时存在.即要么都不存在，要么只存在一个.\r
\r
> **[证]** \r
> 反证法 \r
> \r
> 设$f(x)+g(x),f(x)-g(x)$极限存在，且分别为$A,B$，则有$\\lim [f(x)+g(x)]=\\lim [f(x)-g(x)+2g(x)]=B+2\\lim g(x)=A$，得到$\\lim g(x)=\\displaystyle\\frac{A-B}{2}$与已知矛盾.\r
\r
> [注] \r
> \r
> 由此也可知，两个函数和差的极限存在，推导不出来两个函数极限分别存在.例如$g(x)=x,f(x)=-x$,当$x\\to \\infty$时，两个函数极限都不存在，但$f(x)+g(x)$极限存在.\r
\r
## 关于极限常见的计算问题 \r
\r
对于极限的计算方法很多，如等价无穷小代换，泰勒展开，洛必达，倒代换，有理化，拉格朗日中值定理，积分中值定理，夹逼准则，定积分定义等.做题时应灵活选取，且保证其应用正确性.\r
\r
### 带根号的极限计算  \r
\r
**<例题4>** \r
\r
求极限$\\displaystyle\\lim_{x\\to -8}\\frac{\\sqrt{1-x}-3}{2+\\sqrt[3]{x}}$. \r
\r
**[分析]** 对于这种题通常会优先考虑有理化，分子有理化较为轻松，但分母含有一个三次根号，想到立方和公式$a^3+b^3=(a+b)(a^2-ab+b^2)$.但立方和差公式忘了怎么办?没关系，立即推.\r
\r
考虑到一个等比数列$1+x+x^2=\\displaystyle\\frac{1-x^3}{1-x}$，则有$(1-x)(1+x+x^2)=1-x^3$，令$x=-t$，则有$(1+x)(1-x+x^2)=1+x^3$\r
\r
对等式两边同乘$a^3(a≠0)$，改写为$(a+ax)(a^2-a^2x+a^2x^2)=a^3+(ax)^3$，做换元令$ax=b$，则有$(a+b)(a^2-ab+b^2)=a^3+b^3$. \r
\r
**[解]** \r
\r
原式$=\\displaystyle\\lim_{x\\to -8}\\frac{(\\sqrt{1-x}-3)(\\sqrt{1-x}+3)(4-2\\sqrt[3]{x}+\\sqrt[3]{x^2})}{(2+\\sqrt[3]{x})(\\sqrt{1-x}+3)(4-2\\sqrt[3]{x}+\\sqrt[3]{x^2})}$ \r
\r
&emsp;&emsp;$=\\displaystyle\\lim_{x\\to -8}\\frac{-(8+x)(4-2\\sqrt[3]{x}+\\sqrt[3]{x^2})}{(8+x)(\\sqrt{1-x}+3)}$\r
\r
&emsp;&emsp;$=-2.$ \r
\r
**<例题5>** \r
\r
求极限$\\displaystyle\\lim_{x\\to a^+}\\frac{\\sqrt{x}-\\sqrt{a}+\\sqrt{x-a}}{\\sqrt{x^2-a^2}}\\quad(a>0)$. \r
\r
**[解]** \r
\r
原式$=\\displaystyle\\lim_{x\\to a^+}\\frac{(\\sqrt{x}-\\sqrt{a}+\\sqrt{x-a})(\\sqrt{x}+\\sqrt{a})}{\\sqrt{(x+a)(x-a)}(\\sqrt{x}+\\sqrt{a})}$\r
\r
&emsp;&emsp;$=\\displaystyle\\lim_{x\\to a^+}\\frac{x-a+\\sqrt{x-a}(\\sqrt{x}+\\sqrt{a})}{\\sqrt{x+a}\\sqrt{x-a}(\\sqrt{x}+\\sqrt{a})}$ \r
\r
&emsp;&emsp;$=\\displaystyle\\lim_{x\\to a^+}\\frac{\\sqrt{x-a}+(\\sqrt{x}+\\sqrt{a})}{\\sqrt{x+a}(\\sqrt{x}+\\sqrt{a})}$ \r
\r
&emsp;&emsp;$=\\displaystyle\\lim_{x\\to a^+}\\frac{2\\sqrt{a}}{\\sqrt{2a}(2\\sqrt{a})}=\\frac{\\sqrt{2a}}{2a}.$ \r
\r
### 带$e^x$的极限计算  \r
\r
**<例题6>** \r
\r
设$a,b,p$为非零常数，求极限$I=\\displaystyle\\lim_{x\\to 0}\\frac{a+b e^{\\frac{1}{x}}}{a-be^{\\frac{1}{x}}}\\frac{sinpx}{ |x|}$.\r
\r
**[分析]** 注意到，当$x\\to 0^+$时，$e^{\\frac{1}{x}}\\to +\\infty$，当$x\\to 0^-$时，$e^{\\frac{1}{x}}\\to 0$，故需要考虑左右极限是否存在且相等. \r
\r
**[解]** \r
\r
当$x\\to 0^+$时 \r
\r
原式$=\\displaystyle\\lim_{x\\to 0^+}\\frac{ae^{-\\frac{1}{x}}+b}{ae^{-\\frac{1}{x}}-b}\\frac{px}{ x}=-p$\r
\r
当$x\\to 0^+$时 \r
\r
原式$=\\displaystyle\\lim_{x\\to 0^+}\\frac{a+0}{a-0}\\frac{px}{ -x}=-p$ \r
\r
左右极限存在且相等，故$I=-p$.\r
\r
### 用泰勒展开计算极限 \r
\r
**<例题7>** \r
\r
求极限$\\displaystyle\\lim_{x\\to 0}\\frac{cosx-cos(sinx)}{sin^4x}$.\r
\r
**[分析]** 由于分母等价于$x^4$，故分子要求最低展开到$4$阶，且注意一定不要漏项. \r
\r
对$cosx$展开有$cosx=1-\\frac{1}{2}x^2+\\frac{1}{24}x^4+o(x^4)$\r
\r
对$sinx$展开有$sinx=x-\\frac{1}{6}x^3+o(x^3)$ 展开到$3$阶足以，再往下就是$5$阶多余了. \r
\r
对$cos(sinx)$展开，$cos(sinx)=1-\\frac{1}{2}sin^2x+\\frac{1}{24}sin^4x+o(x^4)$ \r
\r
再对其里面的$sinx$进行展开，对于高于$4$次的项丢掉即可，则有\r
\r
$cos(sinx)=1-\\frac{1}{2}(x^2-\\frac{1}{3}x^4)+\\frac{1}{24}x^4+o(x^4)$\r
\r
**[解]** \r
\r
原式$=\\displaystyle\\lim_{x\\to 0}\\frac{1-\\frac{1}{2}x^2+\\frac{1}{24}x^4+o(x^4)-[1-\\frac{1}{2}(x^2-\\frac{1}{3}x^4)+\\frac{1}{24}x^4+o(x^4)]}{x^4}$ \r
\r
&emsp;&emsp;$=\\displaystyle\\lim_{x\\to 0}\\frac{-\\frac{1}{6}x^4+o(x^4)}{x^4}=-\\frac{1}{6}.$ \r
\r
### 带抽象函数的极限计算   \r
\r
**<例题8>** \r
\r
设函数$f(x)$在$x=1$连续，且$f(1)=1$，则$\\displaystyle\\lim_{x\\to +\\infty}ln[2+f(x^{\\frac{1}{x}})]$. \r
\r
**[分析]** 注意到，当$x\\to +\\infty$时，$x^{\\frac{1}{x}}\\to 1$，因为$x^{\\frac{1}{x}}=e^{\\frac{lnx}{x}}$，由于$x$比$lnx$更快趋近于$+\\infty$，故$\\frac{lnx}{x}\\to 0$，也可用洛必达验证. \r
\r
又由于$f(x)$在$x=1$连续，故$\\displaystyle\\lim_{x\\to +\\infty}f(x^{\\frac{1}{x}})=f(1)=1$，则$\\displaystyle\\lim_{x\\to +\\infty}ln[2+f(x^{\\frac{1}{x}})]=ln3$.\r
\r
### 分段函数分段点连续极限计算 \r
\r
**<例题9>** \r
\r
设$f(x)=\\left\\\\{\\begin{array}{ll}\r
  \\displaystyle\\frac{e^{ax^3}-1}{x-arcsinx}, & x>0 \\\\\\\\\\\\\r
  \\\\\\\\\\\\\r
  6, & x≤0.\r
\\end{array}\\right.$在$x=0$处连续，则a为\\_\\_\\_. \r
\r
**[分析]** 由连续定义可知，要使其连续只需保证$\\displaystyle\\lim_{x\\to 0^+}f(x)=6.$ \r
\r
**[解]** \r
\r
$\\displaystyle\\lim_{x\\to 0^+}\\displaystyle\\frac{e^{ax^3}-1}{x-arcsinx}=\\displaystyle\\lim_{x\\to 0^+}\\displaystyle\\frac{ax^3}{-\\frac{1}{6}x^3}=-a6=6$，解得$a=-1$.\r
\r
### 不可局部代入极限值计算的极限问题  \r
\r
**<例题10>** \r
\r
设$f(x)$在$x=0$可导，且$f(0)=1,f'(0)=3$，则$I=\\displaystyle\\lim_{x\\to \\infty}\\displaystyle [f(\\frac{1}{n})]^{\\displaystyle\\frac{\\frac{1}{n}}{1-cos\\frac{1}{n}}}$ .\r
\r
**[分析]** 因为$f(\\frac{1}{n})\\to f(0)$就将$f(0)=1$带入原极限，就是标准的错误，经典的零分.原因直接带入所得为$1^{\\infty}$，实际上是一个未定式.故我们考虑对式子进行变形处理.\r
\r
**[解]**\r
\r
原式$=\\displaystyle\\lim_{x\\to \\infty}\\displaystyle e^{\\displaystyle\\frac{\\frac{1}{n}}{1-cos\\frac{1}{n}}ln[f(\\frac{1}{n})]}$\r
\r
&emsp;&emsp;$=\\displaystyle\\lim_{x\\to \\infty}\\displaystyle e^{\\displaystyle\\frac{ln[f(\\frac{1}{n})]-ln[f(0)]}{n(1-cos\\frac{1}{n})}}$\r
\r
&emsp;&emsp;$=\\displaystyle\\lim_{x\\to \\infty}\\displaystyle e^{\\displaystyle\\frac{ln[f(\\frac{1}{n})]-ln[f(0)]}{n(\\frac{1}{2n^2})}}$\r
\r
&emsp;&emsp;$=\\displaystyle\\lim_{x\\to \\infty}\\displaystyle e^{\\displaystyle\\frac{ln[f(\\frac{1}{n})]-ln[f(0)]}{\\frac{1}{2n}}}=e^{2f'(0)}=e^6.$ \r
\r
> [注] 本题也可以考虑用泰勒展开，但不可用洛必达，不满足洛必达的使用条件.\r
\r
### 用拉格朗日中值定理计算极限 \r
\r
**<例题11>** \r
\r
设$f(x)$在$[-1,1]$上二阶可导，且$f'(0)=0,f''(0)=4$，求$\\displaystyle\\lim_{x\\to 0}\\displaystyle\\frac{f(x)-f[ln(1+x)]}{x^3}$.\r
\r
**[分析]** 形如$f(g(x))-f(h(x))$的式子，就可以考虑用拉格朗日中值定理.但注意到当$x\\to 0$时，$\\xi \\to 0$，继而$f'(\\xi)\\to 0$，不为一个非零因子，就认为这道题不可用拉格朗日中值定理.事实上，当$x\\to 0$时，$ln(1+x)\\sim x$，\r
由于$\\xi$是介于$x$与$ln(1+x)$之间，由夹逼定理可知$\\xi$也等价于$x$.\r
\r
**[解]**  \r
\r
原式$=\\displaystyle\\lim_{x\\to 0}\\displaystyle\\frac{[x-ln(1+x)]f'(\\xi)}{x^3}\\quad$ (其中$\\xi$介于$x$与$ln(1+x)$之间) \r
\r
&emsp;&emsp;$=\\displaystyle\\lim_{x\\to 0}\\displaystyle\\frac{\\frac{1}{2}x^2f'(\\xi)}{x^3}$ \r
\r
&emsp;&emsp;$=\\displaystyle\\frac{1}{2}\\lim_{x\\to 0}\\displaystyle\\frac{f'(\\xi)}{x}$ \r
\r
&emsp;&emsp;$=\\displaystyle\\frac{1}{2}\\lim_{x\\to 0}\\displaystyle\\frac{f'(x)-f'(0)}{x}$ \r
\r
&emsp;&emsp;$=\\displaystyle\\frac{1}{2}f''(0)=2.$ \r
\r
> [注] 不可用洛必达，但可以采用泰勒展开.\r
\r
### 间断点问题 \r
\r
**<例题12>** \r
\r
设$f(x)=\\displaystyle\\lim_{n\\to \\infty}\\displaystyle\\frac{x^n-x^{2-n}}{x^{n+2}+x^{-n}}$，求其间断点. \r
\r
**[分析]**  注意到，当$|x|<1$时，$x^{2n} \\to 0$，当$|x|>1$时，$x^{2n} \\to +\\infty$，当$|x|=1$时，$x^{2n} \\to 1$，这是由于$1$是个实实在在的数，并不是$1^{\\infty}$未定式.且注意到，当$x=0$时，$f(x)$无定义. \r
\r
**[解]**  \r
\r
当$x=0$时，$f(x)$无定义，\r
\r
当$x≠0$时，\r
\r
$$\r
f(x)=\\lim_{x\\to\\infty}\\frac{x^{2n}-x^2}{x^{2n+2}+1}=\\left\\\\{\\begin{array}{ll}\r
  -x^2, & 0<|x|<1, \\\\\\\\\\\\\r
    \\\\\\\\\\\\\r
  \\displaystyle\\frac{1}{x^2}, & |x|>1, \\\\\\\\\\\\\r
  \\\\\\\\\\\\\r
  0, & |x|=1.\r
\\end{array}\\right.\r
$$\r
\r
\r
故$x=0$为$f(x)$的可去间断点，$x=±1$为$f(x)$的跳跃间断点. \r
\r
> [注] 求间断点，主要考虑无定义点和分段点处.\r
\r
**<例题13>** \r
\r
设$f(x)=\\displaystyle\\lim_{x\\to \\infty}(x-1)arctan|x|^n$，求其间断点. \r
\r
**[分析]** 注意到，当$x\\to +\\infty$时，$arctanx\\to \\frac{\\pi}{2}$，当$x\\to -\\infty$时，$arctanx\\to -\\frac{\\pi}{2}$，由上题结论故有，当$|x|>1$时，$|x|^n\\to +\\infty$，继而$arctan|x|^n\\to\\frac{\\pi}{2}$，接下来就可以轻松算出它的表达式了.  \r
\r
**[解]** \r
\r
$$\r
f(x)=\\left\\\\{\\begin{array}{ll}\r
  \\displaystyle\\frac{\\pi}{2}(x-1), & x< -1, \\\\\\\\\\\\\r
    \\\\\\\\\\\\\r
  \\displaystyle\\frac{\\pi}{2}, & x=-1, \\\\\\\\\\\\\r
  \\\\\\\\\\\\\r
  0, & -1<x≤1, \\\\\\\\\\\\\r
  \\\\\\\\\\\\\r
  \\displaystyle\\frac{\\pi}{2}(x-1), & x> 1.\r
\\end{array}\\right.\r
$$\r
\r
故$x=-1$为$f(x)$的跳跃间断点. \r
\r
### 破坏点模型  \r
\r
该类型题分析请参阅[点我查看](https://www.bilibili.com/video/BV1Tw4m1X7eq/?spm_id_from=333.788)\r
\r
**<例题14>** \r
\r
求极限$\\displaystyle\\displaystyle\\lim_{n\\to\\infty}\\int_{0}^{\\frac{\\pi}{2}}sin^nx dx$.\r
\r
**[解]**  \r
\r
对$\\forall\\epsilon\\in(0,\\frac{\\pi}{2})$有\r
\r
$$\r
\\int_{0}^{\\frac{\\pi}{2}}sin^nx dx=\\int_{0}^{\\frac{\\pi}{2}-\\epsilon}sin^nx dx+\\int_{\\frac{\\pi}{2}-\\epsilon}^{\\frac{\\pi}{2}}sin^nx dx.\r
$$\r
\r
由于$\\left|\\displaystyle\\int_{0}^{\\frac{\\pi}{2}-\\epsilon}sin^nx dx\\right|≤\\displaystyle\\int_{0}^{\\frac{\\pi}{2}-\\epsilon}sin^n(\\frac{\\pi}{2}-\\epsilon) dx=(\\frac{\\pi}{2}-\\epsilon)cos^n\\epsilon≤\\frac{\\pi}{2}cos^n\\epsilon$\r
\r
又由于 $cos\\epsilon\\in[0,1)$，故$\\displaystyle\\lim_{n\\to\\infty}\\frac{\\pi}{2}cos^n\\epsilon=0$，\r
\r
再由保号性可知，$\\exists N>0$，当$n>N$时，有$\\frac{\\pi}{2}cos^n\\epsilon<\\epsilon$. \r
\r
对于$\\displaystyle\\int_{\\frac{\\pi}{2}-\\epsilon}^{\\frac{\\pi}{2}}sin^nx dx$有 \r
\r
$0≤\\displaystyle\\int_{\\frac{\\pi}{2}-\\epsilon}^{\\frac{\\pi}{2}}sin^nx dx≤\\int_{\\frac{\\pi}{2}-\\epsilon}^{\\frac{\\pi}{2}} dx=\\epsilon$\r
\r
综上所述，对$\\forall\\epsilon>0$，$\\exists N>0$，当$n>N$时，有\r
\r
$$\r
\\begin{align}    \r
\\left|\\int_{0}^{\\frac{\\pi}{2}}sin^nx dx\\right|&=\\left|\\int_{0}^{\\frac{\\pi}{2}-\\epsilon}sin^nx dx+\\int_{\\frac{\\pi}{2}-\\epsilon}^{\\frac{\\pi}{2}}sin^nx dx\\right|   \\\\\\\\\r
&≤\\left|\\int_{0}^{\\frac{\\pi}{2}-\\epsilon}sin^nx dx\\right|+\\left|\\int_{\\frac{\\pi}{2}-\\epsilon}^{\\frac{\\pi}{2}}sin^nx dx\\right|    \\\\\\\\\r
&<\\epsilon+\\epsilon=2\\epsilon.\r
\\end{align}\r
$$\r
\r
由极限定义可知，$\\displaystyle\\lim_{n\\to\\infty}\\int_{0}^{\\frac{\\pi}{2}}sin^nx dx=0.$ \r
\r
> [注] 主要思想是夹逼，拟合.\r
\r
### 用洛必达求极限  \r
\r
**<例题15>** \r
\r
$\\displaystyle\\lim_{x\\to +\\infty}\\frac{\\int_{0}^{x}\\sqrt{t}cost dt}{x}$. \r
\r
**[分析]** 上来就洛必达就是经典的错误，标准的零分.这是由于分子分母求导后所得极限是不存在的，故不满足洛必达使用条件.相应的还有如果函数$f(x)n$阶**可导**，那么洛必达至多可使用$n-1$次.这是由于$f(x)n$阶可导推不出$n$阶导函数连续，也就是说$f(x)n$阶**连续可导**才能用$n$次洛必达.  \r
\r
这里我们考虑一下用分部积分. \r
\r
**[解]**  \r
\r
原式$=\\displaystyle\\lim_{x\\to +\\infty}\\frac{\\left.\\sqrt{t}sin t\\right|\\_{0}^{x}-\\displaystyle\\int_{0}^{x}\\frac{1}{2\\sqrt{t}}sin t dt}{x}$  \r
\r
&emsp;&emsp;$=\\displaystyle\\lim_{x\\to +\\infty}\\frac{\\sqrt{x}sin x-\\displaystyle\\int_{0}^{x}\\frac{1}{2\\sqrt{t}}sin t dt}{x}$ \r
\r
&emsp;&emsp;$=\\displaystyle\\lim_{x\\to +\\infty}\\frac{\\sqrt{x}sin x}{x}-\\displaystyle\\lim_{x\\to +\\infty}\\frac{\\displaystyle\\int_{0}^{x}\\frac{1}{2\\sqrt{t}}sin t dt}{x}$ \r
\r
&emsp;&emsp;$=0-\\displaystyle\\lim_{x\\to +\\infty}\\frac{\\displaystyle\\frac{1}{2\\sqrt{x}}sin x }{1}=0.$ \r
\r
> [注] 该题也可以考虑用积分绝对值不等式，夹逼处理.  \r
\r
### 用夹逼求数列极限  \r
\r
**<例题16>** \r
\r
$\\displaystyle\\lim_{n\\to\\infty}(\\frac{n}{n^3+1^2}+\\frac{2n}{n^3+2^2}+\\cdots+\\frac{n^2}{n^3+n^2})$. \r
\r
**[分析]** 这里我们不对分子进行处理，注意到，对于分母$n^3+i^2(i=1,2,\\cdots,n)$，其分母最高次是$3$次，那么实际上$i^2$的影响可以胡萝卜鸡(忽略不计)，且有$n^3+1^2≤n^3+i^2≤n^3+n^2$，故我们考虑对$i^2$进行放缩. \r
\r
**[解]** \r
\r
记$I=(\\displaystyle\\frac{n}{n^3+1^2}+\\frac{2n}{n^3+2^2}+\\cdots+\\frac{n^2}{n^3+n^2})$\r
\r
$(\\displaystyle\\frac{n}{n^3+n^2}+\\frac{2n}{n^3+n^2}+\\cdots+\\frac{n^2}{n^3+n^2})≤I≤(\\frac{n}{n^3+1^2}+\\frac{2n}{n^3+1^2}+\\cdots+\\frac{n^2}{n^3+1^2})$\r
\r
且有$\\displaystyle\\lim_{n\\to\\infty}(\\frac{n}{n^3+n^2}+\\frac{2n}{n^3+n^2}+\\cdots+\\frac{n^2}{n^3+n^2})=\\displaystyle\\lim_{n\\to\\infty}\\frac{\\frac{n^2(n+1)}{2}}{n^3+n^2}=\\frac{1}{2}$\r
\r
&emsp;&emsp;$\\displaystyle\\lim_{n\\to\\infty}(\\frac{n}{n^3+1^2}+\\frac{2n}{n^3+1^2}+\\cdots+\\frac{n^2}{n^3+1^2})=\\displaystyle\\lim_{n\\to\\infty}\\frac{\\frac{n^2(n+1)}{2}}{n^3+1^2}=\\frac{1}{2}$\r
\r
由夹逼准则可知，$\\displaystyle\\lim_{n\\to\\infty}(\\frac{n}{n^3+1^2}+\\frac{2n}{n^3+2^2}+\\cdots+\\frac{n^2}{n^3+n^2})=\\frac{1}{2}$.\r
\r
### 用定积分定义求数列极限  `;export{n as default};
