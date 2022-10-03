import { useAuth } from "@redwoodjs/auth"
import { MetaTags } from "@redwoodjs/web"
import logo from 'src/media/auth0.png'

const AdminPage = () => {
  const {userMetadata, logOut, isAuthenticated} = useAuth()
  return (
    <>
      <MetaTags title="Auth" description="Login page" />

      <div className="max-w-md transition-all duration-300 mt-6 mx-auto w-full">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex justify-center text-2xl font-medium max-h-8 max-w-sm mx-auto w-full h-full mb-3">
            <img src={logo} alt="Auth0" className="object-scale-down max-w-full max-h-full w-auto h-10 mx-auto" />
          </div>
          <br />
          <div>
            {isAuthenticated ? (
              <div>
                <h3>User Metadata</h3>
                {userMetadata ? (
                  <pre>{JSON.stringify(userMetadata, null, 2)}</pre>
                ) : (
                  "No user metadata defined"
                )}
                <button
                  className="btn my-4"
                  onClick={logOut}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div>
                "Not Authenticated"
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  )
}

export default AdminPage
