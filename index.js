import React from 'react';
import ReactDOM from 'react-dom/client';
import "./css/style.css";
import { Header } from './Header';
import { Footer } from './Footer';
import  Students from './Student';
import StudentReview from './StudentReview';

function MainBody()
{
return (
<div>
<p>In this course we learn react by building taskopedia </p>
<ul>
<li>Call Ben</li>
<li>Go to walmart</li>
</ul>
</div>
)
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
    <Header />
    <MainBody />

    <Students experience={4} name="John Doe" headshot="https://randomuser.me/api/portraits/men/40.jpg">
    
    </Students><StudentReview/>

    <Students experience={2} name="Marry Johnson" headshot="https://randomuser.me/api/portraits/women/10.jpg">
    </Students>  <StudentReview/>

    <Students experience={3} name="Harris Hilton" headshot="https://randomuser.me/api/portraits/men/30.jpg"/>


    <Footer />
</div>
);