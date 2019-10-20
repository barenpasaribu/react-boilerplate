import React from 'react'
import './App.css'
import useMsal from './hooks/useMsal'

const Json = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

function App () {
  const [
    account,
    emailMessages,
    error,
    graphProfile,
    onSignIn,
    onSignOut,
    onRequestEmailToken
  ] = useMsal()
  return (
    <div className='App'>
      <div>
        <section>
          <h1>
            Welcome to the Microsoft Authentication Library For Javascript -
            React Quickstart
          </h1>
          {!account ? (
            <button onClick={onSignIn}>Sign In</button>
          ) : (
            <>
              <button onClick={onSignOut}>Sign Out</button>
              <button onClick={onRequestEmailToken}>
                Request Email Permission
              </button>
            </>
          )}
          {error && (
            <p className='error'>Error: {error}</p>
          )}
        </section>
        <section className='data'>
          {account && (
            <div className='data-account'>
              <h2>Session Account Data</h2>
              <Json data={account} />
            </div>
          )}
          {graphProfile && (
            <div className='data-graph'>
              <h2>Graph Profile Data</h2>
              <Json data={graphProfile} />
            </div>
          )}
          {emailMessages && (
            <div className='data-graph'>
              <h2>Messages Data</h2>
              <Json data={emailMessages} />
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default App
