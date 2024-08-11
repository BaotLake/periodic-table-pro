import classNames from 'classnames/bind'
import styles from './previewImage.module.scss'
import { Image } from './components'

const cx = classNames.bind(styles)

type Props = {
  current?: string | number
  onClose?: () => void
}

export function PreviewImage({ current, onClose }: Props) {
  return (
    <div id="preview-gallery" className={cx('preview-image')} onClick={onClose}>
      <Image className={cx('current-img')} src={current || ''} />
    </div>
  )
}
