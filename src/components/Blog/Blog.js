import React from "react";
import useTitle from "../Hooks/TittleHooks/useTitle";


const Blog=()=>{

useTitle("Blog")
    return(
        <div className="p-10">
            <div className="text-center">
            <h1 className="font-bold font-size text-4xl text-centyer my-6">Some usefull questions.</h1>
            </div>
            

  <div className="my-7">
    <h1 className="font-bold text-2xl my-6">1.What is JWT, and how does it work?</h1>
    <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims.
         JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
     <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. 
        What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.

Once decoded, you will get two JSON strings:

   <li>The header and the payload.</li> 
   <li> The signature. </li>

The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm.  
The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact.
 This information is typically used by the server to verify that the user has permission to perform the action they are requesting.
There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.
0, iss, sub, aud, and exp must be present. some are more common than others. 
The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender.
 When the token is used, the receiving party verifies that the header and payload match the signature. </p>
    

</div>
{/* <div  className="my-7">
    <h1 className="font-bold text-2xl my-6">3.What is the difference between javascript and NodeJS?</h1>
    
    <p>The four critical differences between javascript vs NoSQL are:</p>
    <li>Javascript is a programming language that is used for writing scripts on the website. But 
    NodeJS is a Javascript runtime environment</li>
    <li>Javascript is capable enough to add HTML and play with the DOM. But Nodejs does not have capability to add HTML tags.
    </li>
    <li>Some of the javascript frameworks are RamdaJS, TypedJS, etc. And 
    Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. 
    </li>
    <li>javascript can run in any browser engine as like<br/> JS core in safari and Spidermonkey in Firefox. But 
    V8 is the Javascript engine inside of node.js that parses and runs Javascript.
        </li>

</div> */}

<div className="my-7">
    <h1 className="font-bold font-size text-2xl my-6">3.How does NodeJS handle multiple requests at the same time?</h1>
    <p>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. 
        The entire NodeJS architecture is not single-threaded. </p><br/>
   <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven 
    architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. 
    EventLoop is the listener for the EventQueue. If NodeJS can process the request without I/O blocking then the event loop would
     itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests
      parallelly using the NodeJS cluster module or worker_threads module.</p>

</div>
<div className="my-7" >
    <h1 className="font-bold font-size text-2xl my-6">4.Difference between SQL and NoSQL</h1>
    <p>The five critical differences between SQL vs NoSQL are:</p>
    <li>SQL databases are relational, NoSQL databases are non-relational.</li>
    <li>SQL databases use structured query language and have a predefined schema. 
        NoSQL databases have dynamic schemas for unstructured data</li>
    <li>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
    <li>SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.</li>
    <li>SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</li>



</div>
 </div>

    )
}
export default Blog