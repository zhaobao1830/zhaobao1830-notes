import{_ as e,o as p,c as a,R as t}from"./chunks/framework.3AywRrgj.js";const m=JSON.parse('{"title":"同步与异步，阻塞与非阻塞","description":"","frontmatter":{},"headers":[],"relativePath":"javaKnowledge/04.md","filePath":"javaKnowledge/04.md","lastUpdated":1703836988000}'),l={name:"javaKnowledge/04.md"},i=t('<h1 id="同步与异步-阻塞与非阻塞" tabindex="-1">同步与异步，阻塞与非阻塞 <a class="header-anchor" href="#同步与异步-阻塞与非阻塞" aria-label="Permalink to &quot;同步与异步，阻塞与非阻塞&quot;">​</a></h1><p>这四个概念两两组合，会形成4个新的概念，如下：</p><ol><li><p>同步阻塞： 客户端发送请求给服务端，此时服务端处理任务时间很久，则客户端则被服务端堵塞了，所以客户端会一直等待服务端的响应，此时客户端不能做其他任何事，服务端也不会接受其他客户端的请求。这种通信机制比较简单粗暴，但是效率不高。</p></li><li><p>同步非阻塞： 客户端发送请求给服务端，此时服务端处理任务时间很久，这个时候虽然客户端会一直等待响应，但是服务端可以处理其他的请求，过一会回来处理原先的。这种方式很高效，一个服务端可以处理很多请求，不会在因为任务没有处理完而堵着，所以这是非阻塞的。</p></li><li><p>异步阻塞： 客户端发送请求给服务端，此时服务端处理任务时间很久，但是客户端不会等待服务器响应，它可以做其他的任务，等服务器处理完毕后再把结果响应给客户端，客户端得到回调后再处理服务端的响应。这种方式可以避免客户端一直处于等待的状态，优化了用户体验，其实就是类似于网页里发起的ajax异步请求。</p></li><li><p>异步非阻塞： 客户端发送请求给服务端，此时服务端处理任务时间很久，这个时候的任务虽然处理时间会很久，但是客户端可以做其他的任务，因为他是异步的，可以在回调函数里处理响应；同时服务端是非阻塞的，所以服务端可以去处理其他的任务，如此，这个模式就显得非常的高效了。</p></li></ol><p>以上四点，除了第三点，其余的分别为BIO/NIO/AIO，面试官如果问你“请简述一下BIO/NIO/AIO之间的概念与区别”，那么你就可以组织一下语言来回答，或者通过如下生活实例来阐述也是可以的：</p><ol><li><p>BIO： 我去上厕所，这个时候坑位都满了，我必须等待坑位释放了，我才能上吧？！此时我啥都不干，站在厕所里盯着，过了一会有人出来了，我就赶紧蹲上去。</p></li><li><p>NIO： 我去上厕所，这个时候坑位都满了，没关系，哥不急，我出去抽根烟，过会回来看看有没有空位，如果有我就蹲，如果没有我出去接着抽烟或者玩会手机。</p></li><li><p>异步阻塞： 我去上厕所，这个时候坑位都满了，没事我等着，等有了新的空位，让他通知我就行，通知了我，我就蹲上去。</p></li><li><p>AIO： 我去上厕所，这个时候坑位都满了，没事，我一点也不急，我去厕所外面抽根烟再玩玩手机，等有新的坑位释放了，会有人通知我的，通知我了，我就可以进去蹲了。</p></li></ol><p>从这个生活实例中能可以看得出来：</p><p>同步就是我需要自己每隔一段时间，以轮询的方式去看看有没有空的坑位；</p><p>异步则是有人拉完茅坑会通知你，通知你后你再回去蹲；</p><p>阻塞就是在等待的过程中，你不去做其他任何事情，干等着；</p><p>非阻塞就是你再等待的过程中可以去做其他的事，比如抽烟、喝酒、烫头、玩手机。</p><p>小结：异步的优势显而易见，大大优化用户体验，非阻塞使得系统资源开销远远小于阻塞模式，因为系统不需要创建新的进程(或线程)，大大地节省了系统的资源，如此多出来的系统资源可以给其他的中间件去服务了。</p>',11),o=[i];function _(n,r,s,c,d,h){return p(),a("div",null,o)}const O=e(l,[["render",_]]);export{m as __pageData,O as default};
