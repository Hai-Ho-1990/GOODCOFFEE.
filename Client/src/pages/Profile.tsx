import ProfileComponent from '../components/ProfileComponent';

function Profile({ cartCount }: { cartCount: number }) {
    return (
        <>
            <ProfileComponent cartCount={cartCount} />
        </>
    );
}

export default Profile;
