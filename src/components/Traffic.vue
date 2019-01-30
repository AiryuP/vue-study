<template>
    <div class="traffic">
        <div id="allmap"></div>
    </div>
</template>

<script>

import BMap from 'BMap';
import Axios from 'axios';
export default {    
    name:'traffic',
    data(){
        return {
            msg:'查询路况'
        }
    },
    mounted(){
        this.initMap();
        // this.getData(116.3,40);
        // this.axiosData();
        this.clickMap();
    },
    methods: {
        initMap(){
            var map = new BMap.Map("allmap");    // 创建Map实例
	        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
	        //添加地图类型控件
            map.addControl(new BMap.MapTypeControl({
                mapTypes:[
                    BMAP_NORMAL_MAP,
                    BMAP_HYBRID_MAP
                ]}));	  
            map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
            map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

            map.addEventListener("click",function(e){
                // console.log( e )
                console.log(e.point.lng + "," + e.point.lat);
            });
        },
        getData(lon,lat){
            // let url = 'http://www.missfeng.com/iserver/services/GetOverallWeatherComponent/restjsr/GetOverallWeather/'
            let url = 'http://192.168.1.111:8080/tour/findSrWeatherInfo';
            let params =  " 'BM':[{'lon': '106.304324','lat': '29.617236','skiResortId': '10'}] ";
            // "longitude"/"latitude".rjson
            this.$http.post( url,{ params: params } ).then(res=>{
                console.log( res )
            },err=>{

            })
        },
        axiosData(){
            let url = 'http://192.168.1.111:8080/tour/findSrWeatherInfo';
            // let params =  " 'BM':[{'lon': '106.304324','lat': '29.617236','skiResortId': '10'}] ";
            Axios.post( url, {
                'BM':[{'lon': '106.304324','lat': '29.617236','skiResortId': '10'}]
            } ).then(res=>{
                console.log( res );
                // let a = ;
                console.log( typeof( res.config.data ) )
            },err=>{

            })
        },
        clickMap(){
 
        }
    }
}
</script>

<style lang="scss" scoped >
    .traffic{
        #allmap{
            width: 600px;
            height: 600px;
        }
    }
</style>


