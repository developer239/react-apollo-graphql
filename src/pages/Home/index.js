import React from 'react'
import { H1, P, HR } from 'components/Typography'
import { Image } from 'components'
import DummyImage from './dummy.png'


const HomePage = () => (
  <div>
    <H1>React Redux Apollo Graphql</H1>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Tellus elementum sagittis vitae et leo duis ut. Vestibulum sed arcu non odio. Nam aliquam sem et
      tortor consequat. Mattis nunc sed blandit libero volutpat sed cras ornare.
    </P>
    <HR />
    <P>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Vehicula ipsum a arcu
      cursus vitae congue mauris. Cum sociis natoque penatibus et magnis dis. Aliquet porttitor lacus luctus accumsan
      tortor posuere ac ut. Id diam vel quam elementum pulvinar etiam. Quis lectus nulla at volutpat diam ut. Adipiscing
      enim eu turpis egestas pretium aenean pharetra magna ac. Suspendisse sed nisi lacus sed.
    </P>
    <P>
      Neque vitae tempus quam pellentesque nec nam aliquam sem et. Tellus in hac habitasse platea dictumst vestibulum.
      Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Diam phasellus vestibulum lorem sed risus.
      Mattis aliquam faucibus purus in massa tempor nec feugiat. Ac placerat vestibulum lectus mauris ultrices eros in
      cursus turpis. Amet aliquam id diam maecenas ultricies mi eget. Sit amet est placerat in egestas erat. Massa eget
      egestas purus viverra. Amet dictum sit amet justo donec. At consectetur lorem donec massa sapien. Justo donec enim
      diam vulputate ut. Augue neque gravida in fermentum et sollicitudin ac orci phasellus.
      praesent. Fusce id velit ut tortor.
    </P>
    <Image src={DummyImage} alt="dummy" />
  </div>
)

export default HomePage
