var posts=["2025/04/04/git-update/","2025/02/12/markdown-biaoti/","2025/09/24/github-issues-moment/","2025/02/13/markdown-duanluo/","2025/07/17/markdown-qiangdiao/","2025/02/11/markdown-sulanbiao/","2025/08/20/hexo-beiwang/","2025/05/15/telegram-music/","2025/05/04/tgtalk-deploy/","2025/06/28/markdown-huanhang/","2025/04/06/umami-deploy/","2025/05/09/zyfx-drop/","2025/04/14/waline-deploy/","2025/05/19/zyfx-toolooz/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"❖星港◎Star☆","link":"https://blog.starsharbor.com","avatar":"https://bu.dusays.com/2025/04/11/67f92f6fcfb26.webp","descr":"以博客记录生活与热爱！"},{"name":"纸鹿摸鱼处","link":"https://blog.zhilu.site/","avatar":"https://www.zhilu.site/api/avatar.png","descr":"纸鹿至麓不知路，支炉制露不止漉"},{"name":"wallleap","link":"https://myblog.wallleap.cn/","avatar":"https://img.314926.xyz/images/2025/07/09/wallleap.webp","descr":"Luwang's blog"},{"name":"张洪Heo","link":"https://blog.zhheo.com/","avatar":"https://img.zhheo.com/i/67d8fa75943e4.webp","descr":"分享设计与科技生活"},{"name":"CWorld Site","link":"https://cworld0.com/","avatar":"https://cravatar.cn/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=200","descr":"求知若愚，虚怀若谷"},{"name":"东方月初","link":"https://blog.biuxin.com/","avatar":"https://x.xinb.de/i/2024/09/19/040857.webp","descr":"分享有趣但又无聊的东西。"},{"name":"梦爱吃鱼","link":"https://blog.bsgun.cn/","avatar":"https://oss-cdn.bsgun.cn/logo/avatar.256.png","descr":"不负心灵，不负今生。"},{"name":"APP喵","link":"https://www.appmiu.com/","avatar":"https://img.314926.xyz/images/2025/07/09/app喵.webp","descr":"Telegram 频道与资源分享 频道主"},{"name":"面条实验室","link":"https://memo.miantiao.me","avatar":"https://img.314926.xyz/images/2025/07/09/miantiao.webp","descr":"Telegram 频道与技术博客 频道主"},{"name":"DIYGOD","link":"https://diygod.me/","avatar":"https://avatars.githubusercontent.com/u/8266075?v=4","descr":"xlog和folo的大佬"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://npm.elemecdn.com/akilar-friends@latest/avatar/akilar.top.jpg","descr":"欢迎光临糖果屋"},{"name":"清羽飞扬","link":"https://blog.liushen.fun/","avatar":"https://blog.liushen.fun/info/avatar.ico","descr":"柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜"},{"name":"青桔气球","link":"https://blog.qjqq.cn/","avatar":"https://q2.qlogo.cn/headimg_dl?dst_uin=1645253&spec=640","descr":"分享网络安全与科技生活"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱"},{"name":"Cynosura","link":"https://cynosura.one","avatar":"https://img.314926.xyz/images/2025/09/10/Cynosura.webp","descr":"Trying to light up the dark."},{"name":"ATao-Blog","link":"https://blog.atao.cyou","avatar":"https://cdn.atao.cyou/Web/Avatar.png","descr":"做自己喜欢的事"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };