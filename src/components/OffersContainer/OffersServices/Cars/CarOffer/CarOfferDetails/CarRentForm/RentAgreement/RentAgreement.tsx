import React from 'react'
import PopupContainer from '../../../../../../../../UI/PopupContainer/PopupContainer'

const RentAgreement = props => {

  return (
    <PopupContainer
      title='Rent Agreement'
      checkboxHandler={props.acceptRentAgreement}
      showPopupHandler={props.showRentAgreement}
    >
      <h3>Rent Agreement</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras volutpat
        vel tellus at venenatis. Mauris mattis odio sapien, vel dictum eros
        lacinia nec. Nunc enim enim, porttitor et augue in, sollicitudin
        accumsan dui. Pellentesque efficitur mi purus, in luctus mauris
        ullamcorper id. Mauris efficitur libero mauris, et feugiat tortor
        condimentum id. Nunc tristique et mauris non finibus. In eros velit,
        bibendum nec orci quis, auctor pharetra nisl. Aliquam dignissim orci a
        vestibulum pharetra. Curabitur varius porta dictum. Maecenas ultricies
        mauris nisl, nec elementum nisi dapibus ut. Pellentesque vulputate diam
        ligula, at tempor sapien aliquam sit amet. Etiam volutpat libero odio,
        quis efficitur est maximus ut. In eu sapien vitae elit gravida
        consequat. Curabitur aliquet eu diam nec elementum. Etiam nec nulla eu
        sapien rutrum egestas. Nunc pretium mauris sed fermentum fermentum. Nunc
        mattis nibh ut leo sollicitudin, sollicitudin euismod lectus faucibus.
        Nunc vitae interdum elit. Proin feugiat orci ex. Praesent elementum
        risus eget justo pharetra tempor.
      </p>

      <p>
        Quisque finibus eros a mi fermentum, eget eleifend lorem viverra.
        Phasellus efficitur faucibus felis, id maximus eros ullamcorper eu.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
        cubilia curae; Aenean sed maximus leo. Vestibulum placerat turpis nec
        tortor vestibulum porttitor. Nulla quis diam elementum, blandit neque
        sed, rhoncus enim. Proin enim leo, scelerisque id nisl consequat,
        convallis pharetra metus. Donec eros eros, pretium ac ullamcorper id,
        consectetur vitae risus. Maecenas posuere scelerisque posuere. Nullam
        lacinia et urna a efficitur. Pellentesque ullamcorper mi id lorem
        imperdiet, vitae tempor orci rutrum. Ut blandit ex sit amet arcu
        tincidunt faucibus eget non nisi. Proin in justo eu massa tempus
        pulvinar sed et dolor. Integer ex nibh, fringilla vel elit vitae,
        dapibus fringilla lacus. Donec viverra consectetur enim, pharetra
        maximus risus iaculis vel. Vestibulum euismod lectus vitae orci mattis
        pharetra. Maecenas tortor massa, commodo in odio nec, elementum feugiat
        erat. In condimentum tincidunt hendrerit. Duis cursus lobortis odio, sit
        amet egestas orci ultricies vel. Nam eget sem augue.
      </p>

      <p>
        Integer scelerisque ligula et ante dictum, a venenatis nisi dignissim.
        Proin imperdiet dolor ac lorem tempor porttitor. Phasellus efficitur sed
        neque at mattis. Vestibulum sit amet lectus tincidunt, lacinia eros
        quis, sollicitudin turpis. Nulla vel tortor risus. Ut at augue congue,
        congue ex nec, volutpat mi. Praesent et ullamcorper augue, vel aliquam
        neque. Cras lorem enim, finibus et tempor eu, dapibus et augue. Sed
        tempor libero non leo sodales congue. Mauris quis enim mauris. In hac
        habitasse platea dictumst. Proin fermentum augue nisi, sed viverra nisl
        bibendum id. Mauris porta enim quis magna molestie varius. Donec varius
        odio diam, ac facilisis tortor convallis a. Aliquam erat volutpat. Duis
        sed pulvinar dolor.
      </p>
    </PopupContainer>
  )
}

export default RentAgreement
