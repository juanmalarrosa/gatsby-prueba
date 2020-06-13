import { css } from '@emotion/core'
import { graphql } from 'gatsby'
import { Parser } from 'html-to-react'
import React from 'react'
import Layout from '../components/Layout'
import render from 'dom-serializer';


const styles = css`

`

//const htmlToReactParser = new Parser()

export default props => {
  const { data } = props
  const content = data.prismicHomepage.data
  const name = content.name.text
  const modulos = content.modulos1;

  console.log(modulos)

  var divStyle1 = {
    backgroundImage: 'url(' + modulos[0].modulo.document[0].data.image.url + ')',
    
  };
  var divStyle2 = {
    backgroundImage: 'url(' + modulos[1].modulo.document[0].data.image.url + ')',
    
  };
  

  


  return (
    <Layout>
      <div css={styles}>

        <section id="modulos" className="section wrapper mini text-center">

          <h2 className="subtitle">{name}</h2>

          <ul className="list">


          <li className="item">
              <div className="img-holder">
                <span style={divStyle1} className="img"></span>
              </div>
              <div className="holder">
                <h3 className="title">{modulos[0].modulo.document[0].data.title.text}</h3>
                <p className="text">{modulos[0].modulo.document[0].data.description.text}</p>
              </div>
            </li>
          <li className="item">
              <div className="img-holder">
                <span style={divStyle2}  className="img"></span>
              </div>
              <div className="holder">
                <h3 className="title">{modulos[1].modulo.document[0].data.title.text}</h3>
                <p className="text">{modulos[1].modulo.document[0].data.description.text}</p>
              </div>
            </li>



          </ul>

        </section>


      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    prismicHomepage {
      data {

        name {
          text
        }
        description {
          html
        }

        modulos1 {
          modulo {
            id
            document {
              data {
                description {
                  text
                }
                title {
                  text
                }
                image{
                  url
                }
              }
            }
          }
        }


      }
    }
  }
`
