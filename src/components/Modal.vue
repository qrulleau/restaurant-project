<template>
	<div class="modal">
		<div class="modal-container">
			<div class="placement-cancel">
				<a class="cancel" @click="hideModal">
					<i class="fa fa-times" aria-hidden="true"></i>
				</a>
			</div>
			<slot></slot>
		</div>
	</div>
</template>

<script>
import { EventBus } from '../main';
export default {
	methods: {
		hideModal() {
			EventBus.$emit('CloseModal');
		},
	},
};
</script>

<style scoped>
.modal {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 50;
}
.modal-container {
	background-color: #fff;
	width: 420px;
	padding: 30px;
}
.cancel {
	width: 22px;
	height: 22px;
	background-color: #fee86d;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 50%;
	transition: 500ms;
}
.cancel:hover {
	transform: scale(1.4);
}
.placement-cancel {
	display: flex;
	justify-content: flex-end;
	margin-bottom: 10px;
}
i {
	margin-right: 0;
}
</style>
