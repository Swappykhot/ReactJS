import logo from './images/logo192.png'


function MainHeader()
{
    return (
<div className="pt-3 py-1 pl-2" style={{backgroundColor:"black"}}>
<img src={logo} style={{height:"35px",vertiCalAlign:"top"}}></img>
<span className="h2 pt-4 text-white-50">React Course TaskOPedia -</span>
</div>
);
}
const subHeaderStyle = {
color: "blueviolet",
backgroundColor: "lightgray"
}
function SubHeader()
{
return (<p style={subHeaderStyle}> The course is very exciting </p>);
}
export const  Header=()=>
{
return(
<div>
<MainHeader></MainHeader>
<SubHeader></SubHeader>
</div>
)
}