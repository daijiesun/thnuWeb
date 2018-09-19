<template>
    <div class="my_sport">

        <div class="item">
            <h4 class="text-success">我的发布的活动</h4>
            <ul v-for="(item,index) in mySportList" :key="item._id" v-if="item.userName == 'userInfo.userName'">
                <ul>
                    <p>标题：{{item.title}}</p>
                    <p>发布时间：{{item.date}}</p>
                    <p>内容：{{item.content}}</p>
                    放入垃圾箱:
                    <span class="glyphicon glyphicon-trash text-primary remove" @click="removeOne(index,item._id)"></span>
                </ul>
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
        this.$store.dispatch("user/getSportList");
    },
    computed: {
        ...mapGetters({
            mySportList: "user/getSportList"
        })
    },
    methods: {
        removeOne(index, id) {
            const result = confirm("确定移除？一旦移除不可恢复");
            if (result) {
                this.axios
                    .get("user/delOneGoods" + "?id=" + id)
                    .then(res => {
                        if (res.data.status == "success") {
                            this.$toast.center(res.data.message);
                            this.mySportList.splice(index, 1);
                        } else {
                            this.$toast.center(res.data.message);
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        this.$toast.center("系统繁忙，请稍后再试");
                    });
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
.item {
    ul {
        border-bottom: 1px solid #ccc;
        padding: 0px;
        background-size: cover;
        list-style: none;
    }
    span {
        padding-top: 10px;
    }
    .remove {
        cursor: pointer;
    }
}
</style>
