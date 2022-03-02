// https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Testing_media_queries
const detectDeviceType = () => {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
	? 'Mobile'
	: 'Desktop';
}