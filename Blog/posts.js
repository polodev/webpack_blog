function getRandomInt() {
  var min = Math.ceil(10000);
  var max = Math.floor(1000000000000000);
  return Math.floor(Math.random() * (max - min)) + min;
}
const posts = [
	{
		id : getRandomInt(),
		date : 'Aug 20, 2016',
		title : 'BlogPost 1 Lorem ipsum dolor sit amet',
		content : '<div> <p><img class="blogPost_image img-responsive" src="http://www.smarttalent.net/files/2015/09/SmartTalent-Mechanical-Engineer.jpg" alt=""></p> <p>Post No 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, labore nemo, eius illo doloremque enim quos vero. Distinctio adipisci, tempora at, doloremque accusamus quae dolore soluta! Iusto explicabo itaque quo. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis perspiciatis impedit ipsam enim ex, quo, in quaerat excepturi id a, debitis temporibus asperiores nulla architecto delectus dolorem minima? Placeat, voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut officia, qui excepturi nobis minima, laudantium nesciunt iusto error molestiae quaerat. Asperiores quod, eum aut officiis doloremque, eaque voluptatibus error.</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aliquid deserunt animi vitae, ipsum omnis temporibus tempore, ipsa sit asperiores voluptate necessitatibus, est mollitia adipisci nulla modi rerum, repudiandae nobis</p> </div>',
		thumbnail : "",
		author : "Vasanth Sai"
	},
	{
		id : getRandomInt(),
		date : 'Aug 22, 2016',
		title : 'BlogPost 2 Lorem ipsum dolor sit amet',
		content : '<div> <p><img class="blogPost_image img-responsive" src="http://www.smarttalent.net/files/2015/09/SmartTalent-Mechanical-Engineer.jpg" alt=""></p> <p>Post No 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus reprehenderit sed tempora, impedit commodi harum necessitatibus eum, at aperiam voluptatibus blanditiis, excepturi iusto optio. Praesentium vitae, fugiat maxime sapiente illo! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum tenetur, voluptate cumque, mollitia hic itaque omnis aperiam eligendi harum nihil quod necessitatibus! Incidunt quia tenetur, tempora, qui ipsa eius maxime? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut officia, qui excepturi nobis minima, laudantium nesciunt iusto error molestiae quaerat. Asperiores quod, eum aut officiis doloremque, eaque voluptatibus error.</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aliquid deserunt animi vitae, ipsum omnis temporibus tempore, ipsa sit asperiores voluptate necessitatibus, est mollitia adipisci nulla modi rerum, repudiandae nobis</p> </div>',
		thumbnail : "",
		author : "Ranjith Nori"
	},
	{
		id : getRandomInt(),
		date : 'Aug 30, 2016',
		title : 'BlogPost 3 Lorem ipsum dolor sit amet',
		content : '<div> <p><img class="blogPost_image img-responsive" src="http://www.smarttalent.net/files/2015/09/SmartTalent-Mechanical-Engineer.jpg" alt=""></p> <p>Post No 3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, dignissimos consequatur nam culpa alias! Esse quos error eum, officia enim placeat eveniet incidunt voluptate modi sunt culpa saepe consectetur, ullam! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex qui ad eum, voluptatibus distinctio vitae. Nihil nesciunt maxime, magnam deleniti ipsum accusamus aliquam laboriosam aspernatur libero eum. Porro et, temporibus? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut officia, qui excepturi nobis minima, laudantium nesciunt iusto error molestiae quaerat. Asperiores quod, eum aut officiis doloremque, eaque voluptatibus error.</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aliquid deserunt animi vitae, ipsum omnis temporibus tempore, ipsa sit asperiores voluptate necessitatibus, est mollitia adipisci nulla modi rerum, repudiandae nobis</p> </div>',
		thumbnail : "",
		author : "Polo Dev"
	},
	{
		id : getRandomInt(),
		date : 'Aug 10, 2016',
		title : 'BlogPost 4 Lorem ipsum dolor sit amet',
		content : '<div> <p><img class="blogPost_image img-responsive" src="http://www.smarttalent.net/files/2015/09/SmartTalent-Mechanical-Engineer.jpg" alt=""></p> <p>Post No 4 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam temporibus natus aliquid magnam, ea voluptatum quis ut praesentium, ad eum, est illum quas ipsam deleniti eius ex consequatur voluptate, esse. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, officia omnis eveniet nobis blanditiis nihil molestiae doloremque saepe vel deleniti quidem quis dolorum ipsam modi facilis, beatae aliquid praesentium voluptas. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut officia, qui excepturi nobis minima, laudantium nesciunt iusto error molestiae quaerat. Asperiores quod, eum aut officiis doloremque, eaque voluptatibus error.</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aliquid deserunt animi vitae, ipsum omnis temporibus tempore, ipsa sit asperiores voluptate necessitatibus, est mollitia adipisci nulla modi rerum, repudiandae nobis</p> </div>',
		thumbnail : "",
		author : "Anesh"
	},
	{
		id : getRandomInt(),
		date : 'Aug 25, 2016',
		title : 'BlogPost 5 Lorem ipsum dolor sit amet',
		content : '<div> <p><img class="blogPost_image img-responsive" src="http://www.smarttalent.net/files/2015/09/SmartTalent-Mechanical-Engineer.jpg" alt=""></p> <p>Post No 5 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sed unde ullam, nesciunt. Quidem itaque iusto excepturi, corporis sapiente repellendus accusamus iste, reiciendis fugiat, sit deserunt facilis dolore, blanditiis voluptatibus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. A nobis neque, perferendis velit deleniti dolorum dicta, error commodi in laudantium harum repellat id eligendi autem, ducimus, impedit eius amet suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque ut officia, qui excepturi nobis minima, laudantium nesciunt iusto error molestiae quaerat. Asperiores quod, eum aut officiis doloremque, eaque voluptatibus error.</p> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas aliquid deserunt animi vitae, ipsum omnis temporibus tempore, ipsa sit asperiores voluptate necessitatibus, est mollitia adipisci nulla modi rerum, repudiandae nobis</p> </div>',
		thumbnail : "",
		author : "Vasanth Sai"
	},
]

export default posts;