import { setCssVar } from "./utils/css";
import setting from './setting.ts'

const { mapBlockSize } = setting

// 初始化 地图块大小
setCssVar('--map-block-size', mapBlockSize + 'px')
