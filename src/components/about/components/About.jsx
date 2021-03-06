import React from 'react'
import DocumentTitle from 'react-document-title'

function About() {
  return (
    <div>
      <DocumentTitle title="About • Ismay Wolff" />
      <main>
        <h2>About</h2>
        <p>
          I&#39;m an artist, a social scientist and a programmer. My work is a combination of
          these fields and an exploration of the most inspiring parts of each discipline.
        </p>
        <p>
          <i>Born 1983 in Heerde, lives and works in Groningen (Netherlands).</i>
        </p>
        <h3>Education</h3>
        <ul>
          <li>
            Academie Minerva, Groningen (2007 - 2012)<br /><i>fine art, bachelor&#39;s degree</i>
          </li>
          <li>
            European Exchange Academy, Beelitz DE (2011)
          </li>
          <li>
            University of Groningen, Groningen (2001 - 2007)<br />
            <i>social psychology, master&#39;s degree</i>
          </li>
        </ul>
        <h3>Contact</h3>
        <ul>
          <li><a href="tel:+316-46226207">+316 - 462 26 207</a></li>
          <li><a href="mailto:ismay@ismaywolff.nl">ismay@ismaywolff.nl</a></li>
          <li><a href="https://github.com/ismay">github.com/ismay</a></li>
          <li><a href="https://keybase.io/ismay">keybase.io/ismay</a></li>
        </ul>
      </main>
    </div>
  )
}

export default About
