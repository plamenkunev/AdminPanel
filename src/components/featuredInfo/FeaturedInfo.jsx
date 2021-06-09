import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import './featuredinfo.css'

function FeaturedInfo() {
    return (
        <div className='featured'>
            <div className="faturedItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredmoney">$2,443</span>
                    <span className="featuredMoneyRate">
                        -11.5 <ArrowDownward className='featuredIconArrow negative' />
                    </span>
                </div>
                <span className="featuredSub">Compatred to last month</span>
            </div>
            <div className="faturedItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredmoney">$2,443</span>
                    <span className="featuredMoneyRate">
                        -11.5 <ArrowDownward className='featuredIconArrow negative' />
                    </span>
                </div>
                <span className="featuredSub">Compatred to last month</span>
            </div>            <div className="faturedItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredmoney">$2,443</span>
                    <span className="featuredMoneyRate">
                        81.5 <ArrowUpward className='featuredIconArrow positive' />
                    </span>
                </div>
                <span className="featuredSub">Compatred to last month</span>
            </div>            
        </div>
    )
}

export default FeaturedInfo

