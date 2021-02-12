import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Admin from './Admin'
import Home from './Home'
import 'antd/dist/antd.css'
import { RecoilRoot, useRecoilState } from 'recoil'
import { getPlants, getImages } from './api'
import { imagesAtom, plantsAtom } from './state'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

const Root = ({ children }) => {
  const [, setImages] = useRecoilState(imagesAtom)
  const [, setPlants] = useRecoilState(plantsAtom)

  useEffect(() => {
    const getData = async () => {
      const [_images, _plants] = await Promise.all([getImages(), getPlants()])
      setImages(_images)
      setPlants(_plants)
    }
    getData()
  }, [setImages, setPlants])

  return <div>{children}</div>
}

ReactDOM.render(
  <RecoilRoot>
    <React.StrictMode>
      <Router>
        <Root>
          <Switch>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Root>
      </Router>
    </React.StrictMode>
  </RecoilRoot>,
  document.getElementById('root')
)
