import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
           <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Blog Questions</h2>
		<div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
			<div>
				<h3 className="font-bold text-lg">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h3>
				<p className="mt-1 dark:text-gray-400">
An access token and a refresh token are both used in authentication and authorization systems, typically in the context of web applications or APIs. They serve different purposes in the authentication flow. </p>
			</div>
			<div>
				<h3 className="font-bold text-lg">Compare SQL and NoSQL databases?</h3>
				<p className="mt-1 dark:text-gray-400">SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
			</div>
			<div>
				<h3 className="font-bold text-lg">What is express js? What is Nest JS?</h3>
				<p className="mt-1 dark:text-gray-400"> Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js. <br /> Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.</p>
			</div>
			<div>
				<h3 className="font-bold text-lg">What is MongoDB aggregate and how does it work ?</h3>
				<p className="mt-1 dark:text-gray-400">What is Aggregation in MongoDB? Aggregation is a way of processing a large number of documents in a collection by means of passing them through different stages. The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.</p>
			</div>
		</div>
	</div>
</section> 
        </div>

		
    );
};

export default Blog;