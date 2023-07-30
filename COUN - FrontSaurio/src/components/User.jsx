export const User = ({ name, username, DPI, email, phone, role, job, direction, earnings })=>{
    return (
        <>
            <td>{name}</td>
            
            <td>{username}</td>
            <td>{DPI}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{role}</td>
            <td>{job}</td>
            <td>{direction}</td>
            <td>{earnings}</td>
        </>
    )
}
