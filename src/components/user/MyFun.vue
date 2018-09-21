<template>
    <div class="my_goods container-fluid">
        <div class="item">
            <h4 class="text-success">我的趣事</h4>
            <ul v-for="(item,index) in funList" :key="item._id" v-if="item.userName == userInfo.userName">
                <v-gallery :images="item.photo" class="image-box">
                    <a href="javascript:void(0);" :data-image="img" v-for="img in item.photo" :key="img">
                        <div class="bgbox">
                            <img :src="img">
                        </div>
                        <div class="img-title" v-html="img.title"></div>
                    </a>
                </v-gallery>
                <span>发布时间：{{item.date}}</span>
                <p>内容：{{item.content}}</p>
                移到回收站：
                <span class="glyphicon glyphicon-trash text-primary remove" @click="removeOne(index,item._id)"></span>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapState, mapActions } from "vuex";
export default {
    data() {
        return {};
    },
    created() {
        this.$store.dispatch("user/getFunList");
    },
    computed: {
        ...mapGetters({
            funList: "user/getFunList",
            userInfo: "user/getUserInfo"
        })
    },
    methods: {
        removeOne(index, id) {
            const result = confirm("确定移除？一旦移除不可恢复");
            if (result) {
                if (result) {
                    this.$store
                        .dispatch("user/delOneFun", {
                            index: index,
                            id: id
                        })
                        .then(res => {
                            this.$toast.center(res);
                        })
                        .catch(err => {
                            this.$toast.center(err);
                        });
                }
            }
            return;
        }
    }
};
</script>
<style lang="less" scoped>
h4 {
    border-bottom: 1px solid #000;
    padding-bottom: 10px;
    text-align: center;
}
.image-box {
    a {
        clear: both;
        display: inline-block;
        margin: 0 11px 10px 0;
        position: relative;
        text-align: center;
        .bgbox {
            background-color: #ccc;
            height: 150px;
            display: table-cell;
            vertical-align: middle;
            padding: 4px;
            border-radius: 2px;
            img {
                width: 110px;
                height: 150px;
                display: block;
            }
        }
        &:hover {
            .img-title {
                color: #232323;
            }
        }
    }
}
.item {
    ul {
        border-bottom: 1px solid #ccc;
        padding: 0px;
        background-size: cover;
        list-style: none;
        .div_img {
            text-align: center;
        }
        li > img {
            padding: 5px;
            width: 130px;
            height: 180px;
            display: block;
            float: left;
        }
        span {
            padding-top: 10px;
        }
        p {
            padding-top: 10px;
        }
        .remove {
            cursor: pointer;
        }
    }
}
</style>
