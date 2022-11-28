//props are properties/parameters recieved by componenets.
//props can have childern propr.childern
//functional component
const Profile=(props) =>{console.log(props);return <h1>Name: {props.Name}  Last name: {props.lastName}
{props.children}
</h1>};
export default Profile;
