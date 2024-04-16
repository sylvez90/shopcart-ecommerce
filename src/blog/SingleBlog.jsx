import React, { useState } from 'react'
import blogList from '../utilis/blogdata';
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tags from '../shop/Tags';
import PopularPost from '../shop/PopularPost';

const socialList = [ 
  { 
    link: "#", 
    iconName: "icofont-facebook", className: "facebook", 
  }, 
  { 
    link: "#", 
    iconName: "icofont-twitter", 
    className: "twitter", 
  }, 
  { 
    link: "#", 
    iconName: "icofont-linkedin", className: "linkedin", 
  }, 
  { link: "#", 
  iconName: "icofont-instagram", 
  className: "instagram", 
}, 
{ link: "#", 
iconName: "icofont-pinterest", 
className: "pinterest", 
}, 
];

const SingleBlog = () => {
  const [blog, setBlog] = useState(blogList);
  const {id} = useParams()
  //console.log(id);
  const result = blog.filter((b) => b.id === Number(id));
  console.log(result[0]);
  return (
    <div>
      <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />

      <div className="blog-section blog-single padding-tb section-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                <div className="section-wrapper">
                  <div className="row row-cols-1 justify-content-center g-4">
                    <div className="col">
                      <div className="post-item style-2">
                        <div className="post-inner">
                          {
                            result.map((item) => ( 
                              <div key={item.id}>
                                <div className="post-thumb">
                                  <img src={item.imgUrl} alt="" className='w-100' />
                                </div>

                                <div className="post-content">
                                  <h3>{item.title}</h3>
                                  <div className="meta-post">
                                  <ul className="lab-ul">
                            {
                              item.metaList.map((val, i) => ( 
                                <li key={i}>
                                  <i className={val.iconName}></i>{val.text}
                                </li>
                              ))
                            }
                          </ul>
                                  </div>
                                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam ipsum voluptatem quae sapiente velit tempore esse quam consequatur nisi, rem natus delectus porro cum ullam nihil eligendi? Sed ullam, sunt doloribus earum modi, veniam debitis, non quisquam alias facere reprehenderit rem voluptatem quibusdam impedit repellat nostrum ea voluptatibus laudantium aperiam!</p>

                                  <blockquote>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, dignissimos dolore eum reprehenderit explicabo sit esse qui vel voluptatum sint.</p>

                                    <cite>
                                      <a href="#">...Melissa Hunter</a>
                                    </cite>
                                  </blockquote>

                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dicta totam adipisci laborum exercitationem alias error beatae, quo explicabo rerum placeat soluta nemo officia molestias modi consectetur magnam quia nesciunt ipsa odit repellat accusamus minima veniam! Consectetur fuga neque nobis.</p>

                                  <img src="/images/blog/single/01.jpg" alt="" />

                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut quis fugiat tempore ad hic aspernatur voluptatum excepturi, non consequuntur sit quidem, necessitatibus mollitia eaque sed ea corrupti commodi ut alias? Totam, vero. Nostrum eligendi expedita placeat omnis id corrupti.</p>

                                  <div className="video-thumb">
                                    <img src="/images/blog/single/02.jpg" alt="" />
                                    <a href="https://youtu.be/Qhaz36TZG5Y?si=s6aPXsN9nYFGUQbk" className='video-button popup' target='_blank'>
                                      <i className='icofont-ui-play'></i>
                                    </a>
                                  </div>

                                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorum dicta similique laborum? Iusto laudantium dignissimos corrupti, a veniam, ea alias autem perspiciatis dolore, numquam ut eius ex voluptatem temporibus? Quidem consequuntur, ducimus adipisci rerum facilis amet qui voluptas sapiente quas ipsum, consectetur, ad provident velit nihil. Iure, repellat recusandae.</p>

                                  <div className="tags-section">
                                    <ul className="tags lab-ul">
                                      <li>
                                        <a href="#">Agency</a>
                                      </li>
                                      <li>
                                        <a href="#">Business</a>
                                      </li>
                                      <li>
                                        <a href="#">Personal</a>
                                      </li>
                                    </ul>
                                    <ul className="lab-ul social-icons">
                                      {
                                        socialList.map((val, i) => ( 
                                          <li key={i}>
                                            <a href="#" className={val.className}>
                                              <i className={val.iconName}></i>
                                            </a>
                                          </li>
                                        ))
                                      }
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                      <div className="navigations-part">
                        <div className="left">
                          <a href="#" className='prev'>
                            <i className='icofont-double-left'></i> Previous Blog
                          </a>
                          <a href="#" className='title'>
                            Lorem ipsum dolor sit amet consectetur.
                          </a>
                        </div>
                        <div className="right">
                          <a href="#" className='prev'>
                            <i className='icofont-double-right'></i> Next Blog
                          </a>
                          <a href="#" className='title'>
                             Adipisicing elit. Maxime blanditiis totam impedit.
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>


            <div className="col-lg-4 col-12">
              <aside>
                <Tags/>
                <PopularPost/>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog