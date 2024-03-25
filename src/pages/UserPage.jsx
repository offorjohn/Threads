import UserPost from "../UserPost";
import UserHeader from "../components/UserHeader"

const UserPage = () => {
    return (

        <>
            <UserHeader />
            <UserPost likes={1200} replies={481} postImg="/aa.png" postTitle="let's talk about threads" />
            <UserPost likes={1200} replies={481} postImg="/aa.png" postTitle="let's talk about threads" />
            <UserPost likes={1200} replies={481} postImg="/aa.png" postTitle="let's talk about threads" />
            <UserPost likes={1200} replies={481}  postTitle="let's talk about threads"/>
        </>

    )

};

export default UserPage;