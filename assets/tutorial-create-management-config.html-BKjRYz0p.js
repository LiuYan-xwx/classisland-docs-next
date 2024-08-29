import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,a as i,b as s,d as n,w as t,e,r as h,o as r}from"./app-BjL0-qsT.js";const d="/classisland-docs-next/assets/1715485878305-ktLch9Lq.png",o="/classisland-docs-next/assets/1715486027121-BdgRFOgV.png",k="/classisland-docs-next/assets/1715486161995-CoCe05U2.png",c="/classisland-docs-next/assets/1715487543978-DfdrYG9k.png",g="/classisland-docs-next/assets/1715487558487-tNiDLO8b.png",u="/classisland-docs-next/assets/1715487625695-kTRZAbP_.png",m="/classisland-docs-next/assets/1715487641719-xeBV68St.png",B="/classisland-docs-next/assets/1715487682961-CqVXlDht.png",b="/classisland-docs-next/assets/1715490985052-D6Vd5LLH.png",A="/classisland-docs-next/assets/1716004833729-BGndGUXe.png",y={},v=e('<h1 id="教程-手动编写集控配置文件" tabindex="-1"><a class="header-anchor" href="#教程-手动编写集控配置文件"><span>教程：手动编写集控配置文件</span></a></h1><p>本教程将指引您手动编写集控配置文件，并将其静态托管到网上。</p><div class="hint-container note"><p class="hint-container-title">注</p><p>如果您要为一个大型的组织维护集控，手动编辑集控配置会非常麻烦。在这种情况下，建议您使用集控服务器。</p></div><p>每当你看见👉️符号，就说明你应该做一些事情。而其余的只供您参考和更深入的理解。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>在这个教程中，我们将使用 GitHub 作为示例，并使用<a href="https://github.dev" target="_blank" rel="noopener noreferrer">GitHub Codespaces</a>在线编辑这些配置文件。如果您要使用其它的平台，请自行替换文中与 GitHub 有关的操作。</p></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果在您的网络环境下无法正常连接 GitHub，请考虑使用 GitHub 的替代品（如<a href="https://gitee.com/" target="_blank" rel="noopener noreferrer">Gitee</a>）完成本教程。</p></div><h2 id="在开始之前" tabindex="-1"><a class="header-anchor" href="#在开始之前"><span>在开始之前</span></a></h2><p>我们需要在本地安装一个 ClassIsland 实例来测试集控。</p><p><strong>👉️按照指示<a href="https://github.com/HelloWRC/ClassIsland?tab=readme-ov-file#%E5%BC%80%E5%A7%8B%E4%BD%BF%E7%94%A8" target="_blank" rel="noopener noreferrer">下载并安装 ClassIsland 本体</a>。</strong></p><p>!!! tip &quot;如果您之前安装过 ClassIsland，建议您在另一位置安装一个新的实例，并在新的实例中完成本教学的内容。&quot;</p><p>为了托管我们的集控配置，我们需要在 GitHub 上<a href="https://github.com/new" target="_blank" rel="noopener noreferrer">新建一个存储库</a>。</p><p><strong>👉️在 GitHub 上<a href="https://github.com/new" target="_blank" rel="noopener noreferrer">新建一个公开存储库</a>，并命名为<code>classisland-mgmt-cfg</code>。</strong></p><p><strong>👉️在创建仓库界面勾选【Add a README file】复选框</strong></p><figure><img src="'+d+'" alt="1715485878305" tabindex="0" loading="lazy"><figcaption>1715485878305</figcaption></figure><div class="hint-container note"><p class="hint-container-title">注</p><p>为了方便，我们在这里统一将仓库命名为<code>classisland-mgmt-cfg</code>，您也可以给仓库起一个您喜欢的名字。</p></div><p>为了在创建仓库时一起将仓库初始化，我们在这里勾选【Add a README file】，让 GitHub 在创建仓库时创建 README 文件，并初始化仓库。</p><p>在仓库创建好之后，我们进入了仓库的主界面（如图所示）：</p><figure><img src="'+o+'" alt="1715486027121" tabindex="0" loading="lazy"><figcaption>1715486027121</figcaption></figure><p>现在我们需要进入 GitHub Codespaces 来编辑仓库里的文件。</p><p><strong>👉️在仓库界面按下键盘上的<kbd>.</kbd>（英文句号）进入 GitHub Codespaces。</strong></p><figure><img src="'+k+`" alt="1715486161995" tabindex="0" loading="lazy"><figcaption>1715486161995</figcaption></figure><p>现在万事俱备，我们可以开始编写集控的配置文件了。</p><h2 id="编写集控清单" tabindex="-1"><a class="header-anchor" href="#编写集控清单"><span>编写集控清单</span></a></h2><p>集控清单文件包含了要拉取的集控相关文件的信息和组织的相关信息，相当于一个索引文件。ClassIsland 在加入集控后，会拉取这个文件，并根据此文件中的配置来拉取相关的文件。</p><p><strong>👉️新建一个文件，并命名为<code>manifest.json</code>。</strong></p><p><strong>👉️将以下文本粘贴到<code>manifest.json中</code></strong></p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="manifest.json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;ServerKind&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;OrganizationName&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这就是一个最基础的清单文件了。这个文件说明了服务器类型是静态托管的，并且说明了组织名称。我们之后会根据需要逐渐完善这个文件。</p>`,28),f={class:"hint-container tip"},F=i("p",{class:"hint-container-title"},"提示",-1),q=i("code",null,"OrganizationName",-1),C=e(`<p><strong>👉️在编辑器【Git】工具窗口中提交更改。</strong></p><p>我们要将当前的更改提交到 GitHub 上。提交完成后，我们就能在 GitHub 上看到我们的文件了。</p><p>接下来回到本地，我们在 ClassIsland 安装目录中新建一个集控配置文件，来告诉 ClassIsland 实例应该从哪里拉取集控清单。</p><p><strong>👉️在 ClassIsland 安装文件夹中新建一个文件，并命名为<code>ManagementPreset.json</code>，并用本地文本编辑器打开。</strong></p><p><strong>👉将以下文本粘贴到<code>ManagementPreset.json</code>中，并将<code>ManifestUrlTemplate</code>字段中用户名部分替换成你的 GitHub 用户名。</strong></p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="ManagementPreset.json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;ManagementServerKind&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;ManagementServer&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;ManifestUrlTemplate&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://raw.githubusercontent.com/（把这里替换成你的 GitHub 用户名）/classisland-mgmt-cfg/master/manifest.json&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>编辑好集控配置后，我们就可以将这个文件导入到 ClassIsland 实例中了。</p><p><strong>👉运行 ClassIsland。</strong></p><p>如果您是第一次运行 ClassIsland，此时 ClassIsland 会弹出欢迎向导。</p><p><strong>👉同意许可协议，然后点击【加入集控】按钮。</strong></p><figure><img src="`+c+'" alt="1715487543978" tabindex="0" loading="lazy"><figcaption>1715487543978</figcaption></figure>',11),E={class:"hint-container tip"},_=i("p",{class:"hint-container-title"},"提示",-1),j=e('<p>此时会弹出集控加入界面，并自动加载了我们刚刚放置在应用目录下的<code>ManagementPreset.json</code>文件。您可以点击【浏览】按钮选择其它的配置文件。</p><figure><img src="'+g+'" alt="1715487558487" tabindex="0" loading="lazy"><figcaption>1715487558487</figcaption></figure><p><strong>👉在 ID 一栏填入<code>TEST</code></strong></p><p>ID 在此处可以标识 ClassIsland 实例。在后续的实际应用中，您可以将自定义 id 设置为班级名、教室编号等易于识别的名称。</p><p><strong>👉点击【连接】按钮。</strong></p><p>此时应用会下载集控清单文件，速度因网络环境而异。在下载完成后，应用会弹出最后的集控加入确认窗口。</p><p><strong>👉在弹出的确认提示框上，点击【加入】按钮。</strong></p><figure><img src="'+u+'" alt="1715487625695" tabindex="0" loading="lazy"><figcaption>1715487625695</figcaption></figure><p><strong>👉在弹出的加入成功提示框上，点击【确定】按钮。</strong></p><figure><img src="'+m+'" alt="1715487641719" tabindex="0" loading="lazy"><figcaption>1715487641719</figcaption></figure><p>此时应用会重新启动。在重新启动后，进入【应用设置】，您可以看到右上角出现了【由贵单位管理】徽章。</p><figure><img src="'+B+`" alt="1715487682961" tabindex="0" loading="lazy"><figcaption>1715487682961</figcaption></figure><p>🎉恭喜！您现在已经成功地加入了集控！</p><h2 id="拉取档案" tabindex="-1"><a class="header-anchor" href="#拉取档案"><span>拉取档案</span></a></h2><p>尽管我们已经成功加入了集控，但目前它还没有任何作用。接下来我们将引入档案配置。</p><p>我们为本教程预制了档案文件，这样我们就可以专注于编写集控配置。</p><p>回到 GitHub Codespaces 中，我们接下来的操作将在这上面完成。</p><p><strong>👉将<a href="https://gist.github.com/HelloWRC/a0d817648c8f65f26e7d1ab3eb762917/raw/ff6867942311c0c297e90710ab5cd7d147ae98eb/subjects.json" target="_blank" rel="noopener noreferrer">此处</a>的文件内容复制到<code>subjects.json</code></strong></p><p><strong>👉将<a href="https://gist.githubusercontent.com/HelloWRC/a0d817648c8f65f26e7d1ab3eb762917/raw/ff6867942311c0c297e90710ab5cd7d147ae98eb/timelayouts.json" target="_blank" rel="noopener noreferrer">此处</a>的文件内容复制到<code>timelayouts.json</code></strong></p><p><strong>👉将<a href="https://gist.github.com/HelloWRC/a0d817648c8f65f26e7d1ab3eb762917/raw/ff6867942311c0c297e90710ab5cd7d147ae98eb/classplans.json" target="_blank" rel="noopener noreferrer">此处</a>的文件内容复制到<code>classplans.json</code></strong></p><p>这些文件分别存储了科目、时间表和课表信息。尽管这些文件仍然以 ClassIsland 档案文件格式存储，但在加载时只会加载相应的部分。您也可以上传并使用自己的档案文件。</p><p><strong>👉在<code>manifest.json</code>中添加以下高亮代码，并将所有 url 中中用户名部分替换成你的 GitHub 用户名。</strong></p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="manifest.json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;ServerKind&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;OrganizationName&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;ClassPlanSource&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://raw.githubusercontent.com/（把这里替换成你的 GitHub 用户名）/classisland-mgmt-cfg/master/classplans.json&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line highlighted"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;TimeLayoutSource&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://raw.githubusercontent.com/（把这里替换成你的 GitHub 用户名）/classisland-mgmt-cfg/master/timelayouts.json&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line highlighted"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;SubjectsSource&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://raw.githubusercontent.com/（把这里替换成你的 GitHub 用户名）/classisland-mgmt-cfg/master/subjects.json&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line highlighted"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),x=i("code",null,"ReVersionString",-1),H=e('<div class="hint-container warning"><p class="hint-container-title">注意</p><p>在修改这些字段的 url，或者这些字段的 url 指向的内容时，请务必记得增加版本数，否则 ClassIsland 实例可能不会更新这些数据。</p></div><p><strong>👉️在编辑器【Git】工具窗口中提交更改。</strong></p><p><strong>👉️重启 ClassIsland 实例。</strong></p><p>如果前面的步骤没有差错，ClassIsland 会自动拉取档案。您可以在启动应用后，进入【档案编辑】界面，查看拉取的档案。</p><figure><img src="'+b+'" alt="1715490985052" tabindex="0" loading="lazy"><figcaption>1715490985052</figcaption></figure><h2 id="应用-url-模板" tabindex="-1"><a class="header-anchor" href="#应用-url-模板"><span>应用 url 模板</span></a></h2><p>我们刚刚成功地完成了集控档案的分发。然而在实际情况下，我们在将集控部署到多台设备上时，还需要为每台设备分配不同的课表等信息。在这里我们可以在清单文件的 url 中填入 url 模板，以让 ClassIsland 实例在获取信息时将模板替换成对应的信息。</p><p>比如我们有这样一个 url：</p><div class="language-plaintext line-numbers-mode" data-highlighter="shiki" data-ext="plaintext" data-title="plaintext" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>https://example.com/client/{id}/policy.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>其中的<code>{id}</code>是一个 url 模板，它告诉 ClassIsland 在请求这个 url 时，要将这个模板替换成当前的集控 id。按照本教程设定的的 id<code>TEST</code>，在请求时刚刚的 url 会被处理成这样：</p><div class="language-plaintext line-numbers-mode" data-highlighter="shiki" data-ext="plaintext" data-title="plaintext" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>https://example.com/client/TEST/policy.json</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们可以用利用这一个特性，为每一台设备上的 ClassIsland 实例指派不同的 id，以在 ClassIsland 获取清单文件时，通过将清单中 url 中的模板替换成实例的 id 来实现向不同的设备分配不同的课表配置。</p>',12),G=e(`<p><strong>👉️在仓库中新建两个文件夹，分别命名为<code>TEST</code>和<code>HELLO</code></strong></p><p><strong>👉将<a href="https://gist.github.com/HelloWRC/a0d817648c8f65f26e7d1ab3eb762917/raw/ff6867942311c0c297e90710ab5cd7d147ae98eb/classplans.json" target="_blank" rel="noopener noreferrer">此处</a>的文件内容复制到<code>TEST/classplans.json</code></strong></p><p><strong>👉将<a href="https://gist.githubusercontent.com/HelloWRC/a0d817648c8f65f26e7d1ab3eb762917/raw/9226d120d3eeab8861a665236ad005f40df0cf20/classplans-2.json" target="_blank" rel="noopener noreferrer">此处</a>的文件内容复制到<code>HELLO/classplans.json</code></strong></p><p><strong>👉在<code>manifest.json</code>中替换以下高亮代码，并将所有 url 中中用户名部分替换成你的 GitHub 用户名。</strong></p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="manifest.json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;ServerKind&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;OrganizationName&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;ClassPlanSource&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://raw.githubusercontent.com/（把这里替换成你的 GitHub 用户名）/classisland-mgmt-cfg/master/{id}/classplans.json&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;TimeLayoutSource&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://raw.githubusercontent.com/（把这里替换成你的 GitHub 用户名）/classisland-mgmt-cfg/master/timelayouts.json&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;SubjectsSource&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://raw.githubusercontent.com/（把这里替换成你的 GitHub 用户名）/classisland-mgmt-cfg/master/subjects.json&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在刚刚的修改中，我们为课表源项目添加了 url 模板，这样在获取课表时可以按照 id 获取对应的课表。同时我们增加了版本号<code>Version</code>，以告诉 ClassIsland 这个项目已经更新，需要重新获取。</p><p><strong>👉️在编辑器【Git】工具窗口中提交更改。</strong></p><p><strong>👉️重启 ClassIsland 实例。</strong></p>`,8),I=i("code",null,"HELLO",-1),V=e(`<p>在实际情况下，您可以根据需要，在不同的 url 上添加模板。</p><h2 id="策略" tabindex="-1"><a class="header-anchor" href="#策略"><span>策略</span></a></h2><p>除了分发课表，ClassIslad 集控还支持制定策略，限制实例的某些功能。您可以根据需要为您的组织设置策略。</p><p><strong>👉️在将下列配置复制到<code>policy.json</code></strong></p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="policy.json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;DisableSettingsEditing&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#0184BC;--shiki-dark:#D19A66;">true</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),D=e(`<p><strong>👉在<code>manifest.json</code>中替换以下高亮代码，并将所有 url 中中用户名部分替换成你的 GitHub 用户名。</strong></p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="manifest.json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;ServerKind&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;OrganizationName&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hello&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;ClassPlanSource&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://raw.githubusercontent.com/（把这里替换成你的 GitHub 用户名）/classisland-mgmt-cfg/master/{id}/classplans.json&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;TimeLayoutSource&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://raw.githubusercontent.com/（把这里替换成你的 GitHub 用户名）/classisland-mgmt-cfg/master/timelayouts.json&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;SubjectsSource&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://raw.githubusercontent.com/（把这里替换成你的 GitHub 用户名）/classisland-mgmt-cfg/master/subjects.json&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;PolicySource&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Value&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;https://raw.githubusercontent.com/（把这里替换成你的 GitHub 用户名）/classisland-mgmt-cfg/master/policy.json&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line highlighted"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">        &quot;Version&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line highlighted"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们在清单中添加了对集控策略的引用。</p><p><strong>👉️在编辑器【Git】工具窗口中提交更改。</strong></p><p><strong>👉️重启 ClassIsland 实例。</strong></p><p>在重启应用后打开设置界面，您可以看到设置编辑功能已被禁用。</p><figure><img src="`+A+'" alt="1716004833729" tabindex="0" loading="lazy"><figcaption>1716004833729</figcaption></figure>',7),S=i("h2",{id:"结语",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#结语"},[i("span",null,"结语")])],-1),T=i("p",null,"🎉恭喜！您现在已经对手动编辑集控有了初步的认识。您可以进一步研究其它的文档，来更深入地了解编写集控配置的方法。",-1);function w(z,L){const a=h("RouteLink");return r(),p("div",null,[v,i("div",f,[F,i("p",null,[s("您可以试着根据"),n(a,{to:"/management/configure.html#mgmt-manifest"},{default:t(()=>[s("集控配置文档")]),_:1}),s("中的说明修改"),q,s("字段，设置自定义的组织名。")])]),C,i("div",E,[_,i("p",null,[s("如果您先前已经完成欢迎向导，您可以"),n(a,{to:"/management/connect-to-mgmt-server.html"},{default:t(()=>[s("根据此处的文档")]),_:1}),s("来加入集控。")])]),j,i("p",null,[s("在我们刚刚添加的内容中，包含了 3 个 url，以及对应 url 的版本。这些 url 分别指向我们存储到 GitHub 仓库上的科目、时间表和课表信息。这些字段被称为"),n(a,{to:"/management/configure.html#reversionstring"},{default:t(()=>[x]),_:1}),s("，可以存储 url 和对应 url 的版本。在 ClassIsland 拉取清单时，只有在检测到 url 版本比本地存储的版本更新时，才会更新相关数据。")]),H,i("p",null,[s("要了解更多关于 Url 模板的用法，可以看看"),n(a,{to:"/management/client-identify.html#url-template"},{default:t(()=>[s("这篇文档")]),_:1}),s("。")]),G,i("p",null,[s("现在我们已经成功地添加了模板。您可以试着先"),n(a,{to:"/management/connect-to-mgmt-server.html#exit"},{default:t(()=>[s("退出集控")]),_:1}),s("，然后再以"),I,s("的 id 加入集控。您可以看到应用已经拉取了不同的课表。")]),V,i("p",null,[s("上面是一个简单的"),n(a,{to:"/management/policy.html"},{default:t(()=>[s("策略文件")]),_:1}),s("，告诉 ClassIsland 应该禁止编辑设置文件。")]),D,i("p",null,[s("您可以进一步阅读"),n(a,{to:"/management/policy.html"},{default:t(()=>[s("策略文件")]),_:1}),s("文档，了解其它的策略配置，并根据需要自定义策略。")]),S,T])}const N=l(y,[["render",w],["__file","tutorial-create-management-config.html.vue"]]),O=JSON.parse('{"path":"/management/tutorial-create-management-config.html","title":"教程：手动编写集控配置文件","lang":"zh-CN","frontmatter":{"description":"教程：手动编写集控配置文件 本教程将指引您手动编写集控配置文件，并将其静态托管到网上。 注 如果您要为一个大型的组织维护集控，手动编辑集控配置会非常麻烦。在这种情况下，建议您使用集控服务器。 每当你看见👉️符号，就说明你应该做一些事情。而其余的只供您参考和更深入的理解。 提示 在这个教程中，我们将使用 GitHub 作为示例，并使用GitHub Co...","head":[["meta",{"property":"og:url","content":"https://classisland.github.io/classisland-docs-next/management/tutorial-create-management-config.html"}],["meta",{"property":"og:site_name","content":"ClassIsland文档"}],["meta",{"property":"og:title","content":"教程：手动编写集控配置文件"}],["meta",{"property":"og:description","content":"教程：手动编写集控配置文件 本教程将指引您手动编写集控配置文件，并将其静态托管到网上。 注 如果您要为一个大型的组织维护集控，手动编辑集控配置会非常麻烦。在这种情况下，建议您使用集控服务器。 每当你看见👉️符号，就说明你应该做一些事情。而其余的只供您参考和更深入的理解。 提示 在这个教程中，我们将使用 GitHub 作为示例，并使用GitHub Co..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-29T07:25:46.000Z"}],["meta",{"property":"article:author","content":"ClassIsland社区"}],["meta",{"property":"article:modified_time","content":"2024-08-29T07:25:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"教程：手动编写集控配置文件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-08-29T07:25:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"ClassIsland社区\\",\\"url\\":\\"https://classisland.tech\\"}]}"]]},"headers":[{"level":2,"title":"在开始之前","slug":"在开始之前","link":"#在开始之前","children":[]},{"level":2,"title":"编写集控清单","slug":"编写集控清单","link":"#编写集控清单","children":[]},{"level":2,"title":"拉取档案","slug":"拉取档案","link":"#拉取档案","children":[]},{"level":2,"title":"应用 url 模板","slug":"应用-url-模板","link":"#应用-url-模板","children":[]},{"level":2,"title":"策略","slug":"策略","link":"#策略","children":[]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]}],"git":{"createdTime":1715484575000,"updatedTime":1724916346000,"contributors":[{"name":"hello8693","email":"1320998105@qq.com","commits":1}]},"readingTime":{"minutes":9.33,"words":2800},"filePathRelative":"management/tutorial-create-management-config.md","localizedDate":"2024年5月12日","autoDesc":true}');export{N as comp,O as data};