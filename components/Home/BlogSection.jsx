import Image from 'next/image';
import React from 'react';

const BlogSection = () => {
    const blogs = [
        {
            imgSrc: "/images/slider/slide-01.jpg",
            date: "August 10 2018",
            title: "Methods of Recruitment",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros...",
            link: "#"
        },
        {
            imgSrc: "/images/slider/slide-02.jpg",
            date: "August 10 2018",
            title: "Methods of Recruitment",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros...",
            link: "#"
        },
        {
            imgSrc: "/images/slider/slide-03.jpg",
            date: "August 10 2018",
            title: "Methods of Recruitment",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, aliquet sit amet elementum vel, vehicula eget eros...",
            link: "#"
        }
    ];

    return (
        <section className="bg-[#FDFDFD] py-10">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold mb-2">Our Blog</h2>
                    <p className="text-gray-600">Take a look at what people say about US</p>
                </div>
                <div className="flex flex-wrap -mx-4">
                    {blogs.map((blog, index) => (
                        <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <figure className="relative w-full h-64">
                                    <Image 
                                        src={blog.imgSrc} 
                                        alt={blog.title} 
                                        layout="fill" 
                                        objectFit="cover" 
                                        className="mb-4" 
                                    />
                                </figure>
                                <div className="p-4">
                                    <small className="text-[#71b61b] text-xs block mb-2">By Admin | {blog.date}</small>
                                    <h4 className="text-xl font-semibold mb-4">{blog.title}</h4>
                                    <p className="text-justify">{blog.description}</p>
                                    <div className="flex items-center mt-4">
                                        <a href={blog.link} className="text-xs text-[#71b61b] hover:underline">Read more</a>
                                        <i className="fas fa-long-arrow-alt-right ml-2 text-[#71b61b]"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;
