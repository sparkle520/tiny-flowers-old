const $=`# 第二章 随机变量及其分布\r
\r
## 随机变量概念\r
\r
$(\\Omega,F,P)$是一个概率空间，$\\xi (\\omega)$是定义在样本空间$\\Omega$内的一个单值函数，如果对任意**实数 $x$**，有$$\\left\\\\{\\omega: \\xi(\\omega)≤x\\right\\\\} \\in F$$则称$\\xi(\\omega)$为**随机变量**，记作$\\xi$.\r
\r
> $\\xi(\\omega)$是一个函数，$\\omega$为自变量，定义域为$\\Omega$.\r
\r
以下简记$\\xi(\\omega)$为$X$\r
\r
## 分布函数概念\r
\r
设$X$为随机变量，对于任意实数$x$，记$F(x)=P\\left\\\\{X≤x\\right\\\\}$，$(-\\infty < x<+\\infty)$  \r
称$F(x)$为随机变量$X$的分布函数.\r
\r
## 分布函数性质\r
\r
1. $F(x)$**单调不减函数**，即对任意实数$x_1,x_2$且$x_1 < x_2$，有$F(x_1)≤F(x_2)$ \r
\r
2. $0≤F(x)≤1$，且$$F(-\\infty)=\\lim_{x \\to -\\infty}F(x)=0,\\quad F(+\\infty)=\\lim_{x \\to +\\infty} F(x)=1$$\r
3. $F(x)=F(x+0)$，即$F(x)$是**右连续**\r
4. 对于任意实数$x_1,x_2$，且$x_1 < x_2$，有$$P\\left \\\\{x_1 <X≤ x_2 \\right \\\\}=F(x_2)-F(x_1)$$\r
5. 对任意的$x$,有$$P\\left \\\\{X=x\\right \\\\} = F(x)-F(x-0)$$\r
\r
> 特别地，如果 X 是连续性随机变量，则有\r
> $$\r
P\\left \\\\{a<X≤b\\right \\\\}=P\\left \\\\{a≤X<b\\right \\\\}=P\\left \\\\{a<X<b\\right \\\\}=\r
P\\left \\\\{a≤X≤b\\right \\\\}=F(b)-F(a)\r
$$\r
\r
## 离散型随机变量\r
\r
### 定义\r
\r
设$X$是一个随机变量，如果$X$的取值是有限个或无穷可列个值，则称$X$为**离散型随机变量**. \r
设离散型随机变量$X$所有可能取的值为$x_i(i=1,2,\\cdots)$，$X$取各个可能值的概率(即事件$ \\left \\\\{X=x_i\\right\\\\}$的概率)$P\\left\\\\{X=x_i\\right\\\\}$为$p_i(i=1,2,\\cdots)$，则称$P\\left\\\\{X=x_i\\right\\\\}=p_i(i=1,2,\\cdots)$为$X$的**概率分布**或**分布律**.\r
\r
也可采用表格形式表示，即\r
\r
- <table>\r
    <tr>\r
      <th>$X$</th>\r
      <th>$x_1\\ \\ \\  x_2\\ \\ \\  \\cdots\\ \\ \\ x_n \\ \\ \\ \\cdots$</th>\r
    </tr>\r
    <tr>\r
      <td>$p_i$</td>\r
      <td>$p_1\\ \\ \\  p_2\\ \\ \\  \\cdots\\ \\ \\ p_n \\ \\ \\ \\cdots$</td>\r
    </tr>\r
  </table>\r
\r
或\r
\r
- $\r
X \\sim\r
\\begin{equation}\r
 \\left(\r
 \\begin{array}{ccc}\r
    &x_1\\ \\ \\  &x_2\\ \\ \\  &\\cdots\\ \\ \\ &x_n\\ \\ \\  \\cdots\\ \\ \\  \\\\\\\\\r
   &p_1\\ \\ \\  &p_2\\ \\ \\  &\\cdots\\ \\ \\ &p_n\\ \\ \\  \\cdots\\ \\ \\ \r
 \\end{array}\r
 \\right)\r
 \\end{equation}\r
$\r
\r
对于任意实数$a<b$，有\r
\r
$$\r
P\\left \\\\{a≤X≤b\\right \\\\}=\\sum_{a≤x_i≤b}P\\left \\\\{X=x_i\\right \\\\}=\\sum_i p_i.\r
$$\r
\r
其中$\\sum$表示对于满足$a≤x_i≤b$的一切$\\left \\\\{X=x_i\\right\\\\}$发生的概率求和.\r
\r
## 离散型随机变量的概率分布的性质\r
\r
1. $p_i≥0,i=1,2,\\cdots$ \r
\r
2. $$\\sum_ip_i=1\\hspace{100cm}$$\r
\r
## 离散型随机变量$X$的分布函数\r
\r
设离散型随机变量 X 的概率分布为$p_i=P\\left \\\\{X=x_i\\right\\\\}$，则$X$的分布函数为\r
\r
$$\r
F(x)=P\\left \\\\{X≤x\\right\\\\}=\\sum_{x_i≤x}P\\left \\\\{X=x_i\\right\\\\}\\ (-\\infty<x<+\\infty).\r
$$\r
\r
其中$\\sum$表示对于满足$x_i≤x$的一切$\\left \\\\{X=x_i\\right\\\\}$发生的概率求和.$F(x)$在$(-\\infty,+\\infty)$内除$X$可能取的值$x_i(i=1,2,\\cdots)$外，处处是连续的.\r
\r
## 连续性随机变量\r
\r
### 连续性随机变量及其概率密度\r
\r
设随机变量$X$的分布函数为$F(x)$，如果存在非负可积函数$f(x)$，使得对于任意实数$x$，有\r
\r
$$\r
F(x)=P\\left \\\\{X≤x\\right\\\\}=\\int_{-\\infty}^xf(t)dt.\r
$$\r
\r
则称$X$为**连续型随机变量**，$f(x)$为$X$的**概率密度函数**，简称**概率密度**.\r
\r
### 连续性随机变量的概率密度$f(x)$的性质\r
\r
1. $f(x)≥0$  \r
\r
2. $\\int_{-\\infty}^{+\\infty}f(x)dx=1$ \r
\r
3. 对于任意实数$x_1,x_2(x_1≤x_2)$，有\r
   $$\r
   P\\left \\\\{x_1≤X≤x_2\\right\\\\}=F(x_2)-F(x_1)=\\int_{x_1}^{x_2}f(t)dt.\r
   $$\r
\r
4. 若$f(x)$在点$x$处连续，则有$F'(x)=f(x)$.\r
\r
此外，任意连续型随机变量$X$取任意给定的值$c$的概率等于$0$，即$P\\left \\\\{X=c\\right \\\\}=0$.\r
\r
> [注] \r
>\r
> 1. 性质1，2是函数$f(x)$为某一随机变量$X$的概率密度的**充要条件**.\r
>\r
> 2. 给定$X$的概率密度$f(x)$就能确定$F(x)$，由于$f(x)$位于积分号之内，故改变$f(x)$在这个区间内有限个点的函数值，并不改变$X$在该区间内取值的概率.\r
> 3. 由于连续型随机变量$X$的分布函数$F(x)$必可表示成$F(x)=\\int_{-\\infty}^x f(t)dt$，故此时的$F(x)$一定是$(-\\infty,+\\infty)$上的连续函数.反之，不能说凡是连续的$F(x)$对应的$X$就一定是连续性随机变量.\r
> 4. 连续型随机变量$X$的分布函数$F(x)$必连续，但密度函数$f(x)$不一定连续. \r
\r
## 常见的离散型、连续性随机变量及其概率分布 \r
\r
### 常见的离散型随机变量及其概率分布 \r
\r
#### 0-1分布 \r
\r
若随机变量$X$只可能取$0$与$1$两个值，其概率分布\r
\r
$$\r
P\\left \\\\{X=k\\right\\\\}=p^kq^{1-k}\\quad(k=0,1).\r
$$\r
\r
则称$X$服从参数为$p(0<p<1)$的**0-1分布**或**两点分布**，其中$q=1-p$.\r
> [注]\r
> \r
> 1. 该分布用来描述只有两种对立结果(成果与失败、合格与不合格、击中与未击中等)的伯努利试验.\r
\r
#### 二项分布 \r
\r
若随机变量$X$的概率分布为 \r
\r
$$\r
P\\left \\\\{X=k\\right\\\\}=C_n^kp^kq^{n-k}\\quad(k=0,1,2,\\cdots,n).\r
$$\r
\r
则称$X$服从参数为$n,p$的**二项分布**，记作$X\\sim B(n,p)$，其中$0<p<1,q=1-p$. \r
\r
> [注] \r
> \r
> 1. 二项分布描述的是$n$重伯努利试验，若每次试验成功率为$p(0<p<1)$，进行$n$次独立重复试验，则成功总次数$X$服从**二项分布**.或若$X$是$n$重伯努利试验中事件$A$发生的次数，则$X \\sim B(n,p)$，其中$p=P(A)$.\r
> \r
> 2. 如果$X$服从二项分布$B(n,p)$，则$Y=n-X$服从二项分布$B(n,q)$，其中$q=1-p$.\r
\r
#### 几何分布 \r
\r
若随机变量$X$的概率分布为 \r
\r
$$\r
P\\left \\\\{X=n\\right\\\\}=pq^{n-1}\\quad(n=1,2,\\cdots).\r
$$\r
\r
则称$X$服从参数为$p(0<p<1)$的**几何分布**，其中$q=1-p$.\r
\r
> [注]\r
> \r
> 1.几何分布与二项分布都以独立重复试验为背景.其中二项分布描述在$n$次独立重复试验中成功的次数,其取值为$0,1,…,n;$而几何分布则描述在连续独立重复试验中首次取得成功所进行的试验次数，其取值为$1,2,…$ \r
>\r
> 2.几何分布具有“无记忆性”,即当$m,n$均大于$0$时,有\r
$$\r
P\\left \\\\{X=m+n\\mid X>m\\right\\\\}=P\\left \\\\{X=n\\right\\\\}.\r
$$\r
$$\r
P\\left \\\\{X>m+n\\mid X>m\\right\\\\}=P\\left \\\\{X>n\\right\\\\}.\r
$$\r
\r
#### 超几何分布  \r
\r
若随机变量$X$的概率分布为 \r
\r
$$\r
P(X=k)=\\frac{C_M^kC_{N-M}^{n-k}}{C_N^n}\\quad(k=0,1,2,\\cdots,\\min \\left\\\\{M,n\\right\\\\}).\r
$$\r
\r
则称$X$服从参数为$n,N,M$的**超几何分布**,其中$n,N,M$均为正整数且$n≤N,M≤N$.\r
\r
#### 泊松分布    \r
\r
若随机变量$X$的概率分布为\r
\r
$$\r
P\\left \\\\{X=k\\right\\\\}=\\frac{\\lambda^k}{k!}e^{-\\lambda}\\quad(k=0,1,2,\\cdots).\r
$$\r
\r
其中$\\lambda>0$,则称$X$服从参数为$\\lambda$的**泊松分布**,简记作$X\\sim P(\\lambda).$\r
\r
> [注]  \r
> \r
> 泊松分布中参数$\\lambda$的概率意义是随机变量$X$的**数学期望**,即$\\lambda=EX.$\r
\r
##### 泊松定理  \r
\r
若随机变量$X$服从二项分布$B(n,p)$,则当$p$充分小而$n$充分大且$np=\\lambda$适中时$X$近似服从参数为$\\lambda=np$的泊松分布,即\r
\r
$$\r
C_n^kp^k(1-p)^{n-k}\\approx \\frac{\\lambda^k}{k!}e^{-\\lambda}\\quad(其中\\lambda=np).\r
$$\r
\r
> [注] \r
> \r
> 1. 上式表明:以$n,p$为参数的二项分布的概率值可以由参数为$\\lambda=np$的泊松分布的概率值近似.上式也能用来作二项分布概率的近似计算.\r
>\r
> 2. 注意定理的条件$np=\\lambda$要求$n$很大又$p$很小且$\\lambda=np$适中.实际应用中,当$n≥100,p<0.10$时即可利用上式,不过$n$应尽量地大,否则近似效果不佳.\r
\r
### 常见的连续性型随机变量及其概率分布  \r
\r
#### 均匀分布  \r
\r
若随机变量$X$的概率密度为\r
\r
$$\r
f(x)= \\begin{cases}\r
\\displaystyle\\frac{1}{b-a},\\quad & a<x<b, \\\\\\\\\r
\\\\\\\\\r
0,\\quad &其他.\r
\\end{cases}  \r
$$\r
\r
则称$X$服从区间$[a,b]$上的**均匀分布**,记为$X\\sim U(a,b)$.$X$的分布函数为\r
\r
$$\r
F(x)= \\begin{cases}\r
0,\\quad & x<a, \\\\\\\\\r
\\\\\\\\\r
\\displaystyle\\frac{x-a}{b-a},\\quad & a≤x<b, \\\\\\\\\r
\\\\\\\\\r
1,\\quad & x≥b.\r
\\end{cases}  \r
$$\r
\r
> [注]  \r
>\r
> 在区间$[a,b]$上服从均匀分布的随机变量$X$在$[a,b]$内任一子区间上取值的概率只依赖于该子区间的长度,而与其在$[a,b]$内的位置无关.即若$[c,d]\\subset[a,b]$,则\r
\r
$$\r
P\\left \\\\{c≤X≤d\\right\\\\}=\\frac{d-c}{b-a}.\r
$$\r
\r
#### 指数分布 \r
\r
若随机变量$X$的概率密度为\r
\r
$$\r
f(x)= \\begin{cases}\r
\\lambda e^{-\\lambda x},\\quad & x>0, \\\\\\\\\r
\\\\\\\\\r
0,\\quad & x≤0.\r
\\end{cases} \r
$$\r
\r
其中$\\lambda>0$为参数,则称$X$服从参数为$\\lambda$的**指数分布**,记为$X\\sim E(\\lambda)$.$X$的分布函数为\r
\r
$$\r
F(x)= \\begin{cases}\r
1-e^{-\\lambda x},\\quad & x>0, \\\\\\\\\r
\\\\\\\\\r
0,\\quad & x≤0.\r
\\end{cases} \r
$$\r
\r
>[注] \r
>\r
> 1. 指数分布常用作描述一些电子元器件的使用寿命,当$x>0$时,$P\\left\\\\{X>x\\right\\\\} =e^{-\\lambda x}$.\r
> 2. 服从指数分布的随机变量$X$具有“无记忆性”,即对任意$s,t>0$,有$P\\left \\\\{X>s+t \\mid X>s\\right\\\\}=P\\left\\\\{X>t\\right\\\\}$.如果$X$是某一元件的寿命,那么该式表明:已知元件已使用了$s$小时,它总共能使用至少$s+t$小时的条件概率,与从开始使用时算起它至少能使用$t$小时的概率相等,这就是说,元件对它已使用过$s$小时没有记忆.具有这一性质是指数分布有广泛应用的重要原因.\r
\r
#### 正态分布  \r
\r
##### 一般正态分布  \r
\r
若随机变量$X$的概率密度为\r
\r
$$\r
f(x)=\\frac{1}{\\sqrt{2 \\pi}\\sigma} e^{\\displaystyle-\\frac{(x-\\mu)^{2}}{2 \\sigma^{2}}}\\quad(-\\infty<x<+\\infty).\r
$$\r
\r
其中$\\mu$和$\\sigma$均为常数,且$σ>0$,则称$X$服从参数为$\\mu,\\sigma^2$的**正态分布**,简记为$X\\sim N(\\mu,\\sigma^2)$.$X$的分布函数为\r
\r
$$\r
F(x)= \\frac{1}{\\sqrt{2 \\pi}\\sigma} \\int_{-\\infty}^{x}e^{\\displaystyle-\\frac{(t-\\mu)^{2}}{2 \\sigma^{2}}}dt.\r
$$\r
\r
若$X\\sim N(\\mu,\\sigma^2)$，其分布函数为$F(x)$，则有\r
\r
$$\r
F(x)=P\\left \\\\{X≤x\\right\\\\}=\\Phi(\\frac{x-\\mu}{\\sigma}),x\\in R.\r
$$\r
$$\r
P\\left \\\\{x_1＜X≤x_2\\right\\\\}=\\Phi(\\frac{x_2-\\mu}{\\sigma})-\\Phi(\\frac{x_1-\\mu}{\\sigma})\\quad(-\\infty<x_1<x_2<+\\infty).\r
$$\r
\r
其中$\\Phi$为标准正态分布的分布函数.\r
\r
若$X\\sim N(\\mu,\\sigma^2)$，则$f(x)$具有以下性质:\r
\r
1. 概率密度曲线$y=f(x)$关于$x=\\mu$对称.这表明对于任意$h>0$有\r
\r
$$\r
P\\left \\\\{\\mu- h<X≤\\mu\\right\\\\}=P\\left \\\\{\\mu<X≤\\mu+h\\right\\\\},即f(\\mu-x)=f(\\mu+x).\r
$$\r
\r
2. 当$x=\\mu$时$f(x)$取到最大值$f(\\mu)=\\displaystyle\\frac{1}{\\sqrt{2\\pi}\\sigma}$，$x=\\mu$为$f(x)$的驻点.在$x=\\mu±\\sigma$处曲线$y=f(x)$有拐点.曲线$y=f(x)$以$Ox$轴为渐近线.\r
\r
##### 标准正态分布  \r
\r
当$\\mu=0,\\sigma=1$时，称$X$服从**标准正态分布**，记为$X\\sim N(0,1)$，其概率密度和分布函数分别用$\\phi(x)$,$\\Phi(x)$表示,即\r
\r
$$\r
\\varphi(x)=\\frac{1}{\\sqrt{2\\pi}}e^{-\\frac{x^2}{2}}\\quad(-\\infty<x<+\\infty),\\Phi(x)=\\frac{1}{\\sqrt{2\\pi}}\\int_{-\\infty}^{x}e^{-\\frac{t^2}{2}}dt.\r
$$\r
\r
标准正态分布$N(0,1)$的分布函数中$\\Phi(x)$与概率密度$\\varphi(x)$的性质主要有:\r
\r
1. $\\varphi(-x)=\\varphi(x)$，即$\\varphi(x)$是偶函数.\r
\r
2. $\\varphi(x)$在$(-\\infty,0)$内严格单调递增，在$(0,+\\infty)$内严格单调递减，在$x=0$处取最大值$\\frac{1}{\\sqrt{2\\pi}}$.\r
\r
3. $x=±1$是$\\varphi(x)$的两个拐点.\r
\r
4. $\\displaystyle\\lim_{x \\to \\infty}\\varphi(x)=0$，即$x$轴是$\\varphi(x)$的水平渐近线.\r
\r
5. $\\Phi(x)=1-\\Phi(-x)$.特别地，$\\Phi(0)=\\frac{1}{2}$.\r
\r
6. 对于任意实数$a>0$，有$P\\left\\\\{|X|≤a\\right\\\\}=2\\Phi(a)-1$.\r
\r
## 随机变量函数的分布 \r
\r
设$X$是一个随机变量，$y=g(x)$(一般$g(x)$是已知的连续函数)是一个实函数，则$Y=g(X)$也是一个随机变量.所谓求随机变量$X$的函数的分布问题，就是由已知的随机变量$X$的概率分布去求得它的函数$Y=g(X)$的概率分布或概率密度乃至分布函数.这里$Y$是这样的随机变量，当$X$取值$x$时，$Y$取值$g(x)$.\r
\r
对于一般情形,设法将$Y$的概率分布通过$X$的概率分布表示:$F(y)=P\\left\\\\{Y≤y\\right\\\\}=P\\left\\\\{g(X)≤y\\right\\\\}$.用这种方法，在许多情形下可以求出的概率分布.\r
\r
### 离散型随机变量函数的分布的求法 \r
\r
设$X$是离散型随机变量，其概率分布为\r
\r
$$\r
P\\left\\\\{X=x_i\\right\\\\}=p_i,\\quad i=1,2,\\cdots,\r
$$\r
\r
则随机变量$X$的函数$Y=g(X)$取值$g(x_i)$的概率为\r
\r
$$\r
P\\left\\\\{Y=g(x_i)\\right\\\\}=p_i,\\quad i=1,2,\\cdots,\r
$$\r
\r
如果在函数值$g(x_i)$中有相同的数值，则将它们相应的概率之和作为随机变量$Y=g(X)$取该值的概率，就可以得到$Y=g(X)$的概率分布.\r
\r
### 连续性型随机变量函数的分布的求法 \r
\r
设$X$为连续型随机变量,其分布函数、概率密度分别为$F_X(x)与f_X(x)$，随机变量$Y=g(X)$是$X$的函数，则$Y$的分布函数或概率密度可用下面两种方法求得:\r
\r
1. **定义法** \r
\r
如果随机变量的函数$Y=g(X)$是连续型的，最基本的方法是**分布函数法**，即先求出$Y$的分布函数$F_Y(y)=P\\left\\\\{g(X)≤y\\right\\\\}=\\int_{g(x)≤y}f(x)dx$，其中$f(x)$是随机变量$X$的概率密度.然后将$F_Y(y)$关于$y$求导，一般能得到$Y$的概率密度.\r
\r
2. 公式法 \r
\r
当$y=g(x)$是严格单调函数时可由如下方法求出$Y$的概率密度:设随机变量$X$具有概率密度$f_X(x),-\\infty <x<+\\infty$，又设函数$g(x)$在$X$可能取值的区间上处处可导且单调，$h(y)$是$g(x)$的反函数，则$Y=g(X)$是连续型随机变量，且其概率密度为\r
\r
$$\r
f_Y(y)= \\begin{cases}\r
f_X[ h(y) ]|h'(y)|,\\quad & \\alpha <x<\\beta, \\\\\\\\\r
\\\\\\\\\r
0,\\quad & 其他.\r
\\end{cases} \r
$$\r
\r
其中$(α,β)$是函数$g(x)$在$X$可能取值的区间上的值域.\r
\r
> [注] \r
> \r
> 利用公式法直接写出$Y=g(X)$的概率密度时，要注意两点:\r
> 1. 要检验函数$y=g(x)$是否严格单调(一般可利用导数$g'(x)$来检验)，如果不是严格单调的，那就不能用这一公式.\r
> 2. 公式中的$h'(y)$要取绝对值，否则可能会导致错误.\r
\r
3. 如果$Y=g(X)$是离散型的，首先确定$Y$的可能取值，而后通过计算概率$P\\left\\\\{Y=a\\right\\\\}$求得$Y$的概率分布.`;export{$ as default};
