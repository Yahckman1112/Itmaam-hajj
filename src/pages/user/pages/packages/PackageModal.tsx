
import CustomModal from './../../../../components/modal/CustomModal';

interface Prop{
    isOpen:boolean
}
function PackageModal({isOpen}:Prop) {


  return (
    <div >
       < CustomModal header='Packages' setIsOpen={isOpen}> body </CustomModal>
    </div>
  )
}

export default PackageModal