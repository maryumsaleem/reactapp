//destructring props in functional component
const Profile=(props) =>{console.log(props);const {name,lastname}=props;
return <h1>Name: {name}  Last name: {lastname}
{props.children}
</h1>};
export default Profile;
