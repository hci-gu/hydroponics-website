import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import Admin from './pages/Admin'
import Home from './pages/Home'
import Info from './pages/Info'
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
      const [imageResponse, _plants] = await Promise.all([
        getImages(),
        getPlants(),
      ])
      setImages(imageResponse.images)
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
            <Route path="/info">
              <Info />
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
