import { useAuth } from "@redwoodjs/auth"

const AdminPage = () => {
  const {userMetadata, logOut, isAuthenticated} = useAuth()
  return (
    isAuthenticated && (
      <div>
        <h3>User Metadata</h3>
        {userMetadata ? (
          <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
        ) : (
          "No user metadata defined"
        )}
        <button onClick={logOut}>Log Out</button>
      </div>
    )
  )
}

export default AdminPage
