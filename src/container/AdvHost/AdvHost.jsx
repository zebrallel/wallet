import './AdvHost.css'
import React from 'react'

// components
import Header from '@src/component/Header/Header'
import Footer from '@src/component/Footer/Footer'

// images
const imgLeft1 = '//pdxzogn6s.bkt.clouddn.com/left1.png'
const imgLeft2 = '//pdxzogn6s.bkt.clouddn.com/left2.png'
const imgRight1 = '//pdxzogn6s.bkt.clouddn.com/right1.png'
const imgRight2 = '//pdxzogn6s.bkt.clouddn.com/right2.png'

export default class AdvHost extends React.PureComponent {
    render() {
        return (
            <div id="AdvHost">
                <Header />
                <div className="g-page">
                    <div className="banner" />
                    <table className="table">
                        <tbody>
                            <tr>
                                <td width="50%">
                                    <img src={imgLeft1} />
                                </td>
                                <td width="50%">
                                    <div className="text">
                                        <span className="title">1 - 媒体资源优质</span>
                                        <p>
                                            量子传媒广告平台拥有大量国内外优质媒体资源；覆盖国内70%以上的移动终端用户，日均曝光量超亿、
                                            日均活跃用户达3000>万
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="text">
                                        <span className="title">2 - 广告形式丰富</span>
                                        <p>
                                            量子传媒支持推荐墙、积分墙、插屏、视频等多种丰富的广告形式，为广告主量身定制最优推广方案，选择最合理推广形式。
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <img src={imgRight1} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src={imgLeft2} />
                                </td>
                                <td>
                                    <div className="text">
                                        <span className="title">3 - 推广精准高效</span>
                                        <p>
                                            量子传媒广告平台通过对于行业的深度的解读，利用先进的数据挖掘算法，让广告主根据设备型号特征、移动运营商特征、媒体分类特征以及手机操作偏好特性进行有选择、有效率的投放。
                                        </p>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="text">
                                        <span className="title">4 - 专业评估分析</span>
                                        <p>严格控制渠道质量，使流量真实有效，优化推广行为，让广告主感到物超所值。</p>
                                    </div>
                                </td>
                                <td>
                                    <img src={imgRight2} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="banner-bottom">
                    <div className="img"></div>
                </div>
                <Footer />
            </div>
        )
    }
}
