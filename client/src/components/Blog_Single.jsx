import React from 'react'

import image1 from "../images/image_7.jpg";
import image2 from "../images/image_8.jpg";
import img1 from '../images/image_1.jpg';
import img2 from '../images/image_2.jpg';
import img3 from '../images/image_3.jpg';
import person1 from '../images/person_1.jpg';
import person2 from '../images/person_2.jpg';
import person3 from '../images/person_3.jpg';
import person4 from '../images/person_4.jpg';
import person5 from '../images/person_5.jpg';
import person6 from '../images/person_6.jpg';
import back from '../images/bg_1.jpg';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Blog_Single = () => {
    return (
        <>
            <div class="hero-wrap hero-wrap-2" style={{ backgroundImage: `url(${back})` }} data-stellar-background-ratio="0.5">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row no-gutters slider-text align-items-end justify-content-start">
                        <div class="col-md-12  text-center mb-5">
                            <p class="breadcrumbs mb-0"><span class="mr-3"><a href="/">Home <ArrowForwardIosIcon /></a></span> <span class="mr-3"><a href="/blog">Blog <ArrowForwardIosIcon /></a></span> <span>Blog Single</span></p>
                            <h1 class="mb-3 bread">Single Blog</h1>
                        </div>
                    </div>
                </div>
            </div>

            <section class="ftco-section ftco-degree-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 ">
                            <h2 class="mb-3">It is a long established fact a reader be distracted</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
                            <p>
                                <img src={image1} alt="" class="img-fluid" />
                            </p>
                            <p>Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
                            <h2 class="mb-3 mt-5">#2. Creative WordPress Themes</h2>
                            <p>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
                            <p>
                                <img src={image2} alt="" class="img-fluid" />
                            </p>
                            <p>Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
                            <p>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
                            <p>Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
                            <p>Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p>
                            <div class="tag-widget post-tag-container mb-5 mt-5">
                                <div class="tagcloud">
                                    <a href="#" class="tag-cloud-link">Life</a>
                                    <a href="#" class="tag-cloud-link">Sport</a>
                                    <a href="#" class="tag-cloud-link">Tech</a>
                                    <a href="#" class="tag-cloud-link">Travel</a>
                                </div>
                            </div>

                            <div class="about-author d-flex p-4 bg-light">
                                <div class="bio mr-5">
                                    <img src={person1} alt="Image placeholder" class="img-fluid mb-4" />
                                </div>
                                <div class="desc">
                                    <h3>George Washington</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                                </div>
                            </div>


                            <div class="pt-5 mt-5">
                                <h3 class="mb-5">6 Comments</h3>
                                <ul class="comment-list">
                                    <li class="comment">
                                        <div class="vcard bio">
                                            <img src={person2} alt="Image placeholder" />
                                        </div>
                                        <div class="comment-body">
                                            <h3>John Doe</h3>
                                            <div class="meta">October 03, 2018 at 2:21pm</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                            <p><a href="#" class="reply">Reply</a></p>
                                        </div>
                                    </li>

                                    <li class="comment">
                                        <div class="vcard bio">
                                            <img src={person3} alt="Image placeholder" />
                                        </div>
                                        <div class="comment-body">
                                            <h3>John Doe</h3>
                                            <div class="meta">October 03, 2018 at 2:21pm</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                            <p><a href="#" class="reply">Reply</a></p>
                                        </div>

                                        <ul class="children">
                                            <li class="comment">
                                                <div class="vcard bio">
                                                    <img src={person4} alt="Image placeholder" />
                                                </div>
                                                <div class="comment-body">
                                                    <h3>John Doe</h3>
                                                    <div class="meta">October 03, 2018 at 2:21pm</div>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                    <p><a href="#" class="reply">Reply</a></p>
                                                </div>


                                                <ul class="children">
                                                    <li class="comment">
                                                        <div class="vcard bio">
                                                            <img src={person5} alt="Image placeholder" />
                                                        </div>
                                                        <div class="comment-body">
                                                            <h3>John Doe</h3>
                                                            <div class="meta">October 03, 2018 at 2:21pm</div>
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                            <p><a href="#" class="reply">Reply</a></p>
                                                        </div>

                                                        <ul class="children">
                                                            <li class="comment">
                                                                <div class="vcard bio">
                                                                    <img src={person6} alt="Image placeholder" />
                                                                </div>
                                                                <div class="comment-body">
                                                                    <h3>John Doe</h3>
                                                                    <div class="meta">October 03, 2018 at 2:21pm</div>
                                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                                    <p><a href="#" class="reply">Reply</a></p>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li class="comment">
                                        <div class="vcard bio">
                                            <img src={person1} alt="Image placeholder" />
                                        </div>
                                        <div class="comment-body">
                                            <h3>John Doe</h3>
                                            <div class="meta">October 03, 2018 at 2:21pm</div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                            <p><a href="#" class="reply">Reply</a></p>
                                        </div>
                                    </li>
                                </ul>

                                <div class="comment-form-wrap pt-5">
                                    <h3 class="mb-5">Leave a comment</h3>
                                    <form action="#" class="p-5 bg-light">
                                        <div class="form-group">
                                            <label for="name">Name *</label>
                                            <input type="text" class="form-control" id="name" />
                                        </div>
                                        <div class="form-group">
                                            <label for="email">Email *</label>
                                            <input type="email" class="form-control" id="email" />
                                        </div>
                                        <div class="form-group">
                                            <label for="website">Website</label>
                                            <input type="url" class="form-control" id="website" />
                                        </div>

                                        <div class="form-group">
                                            <label for="message">Message</label>
                                            <textarea name="" id="message" cols="30" rows="10" class="form-control"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <input type="submit" value="Post Comment" class="btn py-3 px-4 btn-primary" />
                                        </div>

                                    </form>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-4 pl-md-5 sidebar ">
                            <div class="sidebar-box">
                                <form action="#" class="search-form">
                                    <div class="form-group">
                                        <span class="icon icon-search"></span>
                                        <input type="text" class="form-control" placeholder="Type a keyword and hit enter" />
                                    </div>
                                </form>
                            </div>
                            <div class="sidebar-box ">
                                <div class="categories">
                                    <h3 class="heading-3">Jobs</h3>
                                    <li><a href="#">Graphic Designer <span>(12)</span></a></li>
                                    <li><a href="#">Visual Assistant <span>(22)</span></a></li>
                                    <li><a href="#">Programing <span>(37)</span></a></li>
                                    <li><a href="#">Office Admin <span>(42)</span></a></li>
                                    <li><a href="#">Web Designer <span>(14)</span></a></li>
                                    <li><a href="#">Language <span>(140)</span></a></li>
                                </div>
                            </div>

                            <div class="sidebar-box ">
                                <h3 class="heading-3">Recent Blog</h3>
                                <div class="block-21 mb-4 d-flex">
                                    <a class="blog-img mr-4" style={{ backgroundImage: `url(${img1})` }}></a>
                                    <div class="text">
                                        <h3 imgclass="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                        <div class="meta">
                                            <div><a href="#"><span class="icon-calendar"></span> July 12, 2018</a></div>
                                            <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                                            <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-21 mb-4 d-flex">
                                    <a class="blog-img mr-4" style={{ backgroundImage: `url(${img2})` }}></a>
                                    <div class="text">
                                        <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                        <div class="meta">
                                            <div><a href="#"><span class="icon-calendar"></span> July 12, 2018</a></div>
                                            <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                                            <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="block-21 mb-4 d-flex">
                                    <a class="blog-img mr-4" style={{ backgroundImage: `url(${img3})` }}></a>
                                    <div class="text">
                                        <h3 class="heading"><a href="#">Even the all-powerful Pointing has no control about the blind texts</a></h3>
                                        <div class="meta">
                                            <div><a href="#"><span class="icon-calendar"></span> July 12, 2018</a></div>
                                            <div><a href="#"><span class="icon-person"></span> Admin</a></div>
                                            <div><a href="#"><span class="icon-chat"></span> 19</a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="sidebar-box ">
                                <h3 class="heading-3">Tag Cloud</h3>
                                <div class="tagcloud">
                                    <a href="#" class="tag-cloud-link">dish</a>
                                    <a href="#" class="tag-cloud-link">menu</a>
                                    <a href="#" class="tag-cloud-link">food</a>
                                    <a href="#" class="tag-cloud-link">sweet</a>
                                    <a href="#" class="tag-cloud-link">tasty</a>
                                    <a href="#" class="tag-cloud-link">delicious</a>
                                    <a href="#" class="tag-cloud-link">desserts</a>
                                    <a href="#" class="tag-cloud-link">drinks</a>
                                </div>
                            </div>

                            <div class="sidebar-box ">
                                <h3 class="heading-3">Paragraph</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>



        </>
    )
}

export default Blog_Single