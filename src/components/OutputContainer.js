function OutputContainer(props) {
    return (
        <div>
            <h3>ID : {props.id}</h3>
            <h3>Code : {props.code}</h3>
            <h3>Student Name : {props.name}</h3>
            <h3>Student Email : {props.email}</h3>
            <h3>Student Contact : {props.contact}</h3>
            <h3>Student Address : {props.address}</h3>
            <h3>Student DateOfBirth : {props.dateofbirth}</h3>
            <h3>Student Gender : {props.gender}</h3>
            <h3>Student Status : {props.status}</h3>
            <h3>Student Major : {props.major}</h3>
            <h3>Student DateOfIssue : {props.dateofissue}</h3>           
        </div>
    );
}

export default OutputContainer;