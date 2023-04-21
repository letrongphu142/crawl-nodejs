# crawl-nodejs
# Introduce crawl data
- Crawl data là quá trình thu thập dữ liệu của công cụ tìm kiếm nhằm tìm
nội dung mới hoặc cập nhật những thay đổi trên trang cũ. Những định
dạng được thu thập dữ liệu gồm: html, hình ảnh, video...
- Web Crawler (trình thu thập web) là một bot internet thực hiện thu thập dữ liệu qua World Wide Web. Crawler được công cụ tìm kiếm lập trình
sẵn nhằm mục đích lập chỉ mục cho các nội dung thu thập được. Ưu điểm của crawl dữ liệu
- Giảm được thời gian, công sức trong quá trình thu thập lượng lớn thông tin, dữ liệu cần thiết.
- Giảm bớt khối lượng công việc của người xây dựng web cần thực hiện sáng tạo. Crawl dữ liệu cũng sẽ giúp cho website của bạn được đa dạng, phong phú hơn bởi lượng tin tức, nội dung có thể thu hút người dùng hơn.
- Quá trình crawl dữ liệu thường không quá phức tạp. Do đó, dễ dàng tổng hợp được thông tin nhiều website khác nhau. Thực hiện đối chiếu, so sánh cũng như thực hiện các thuật toán liên quan đến phân tích thị trường tốt hơn. Từ đó tối ưu được thời gian làm việc tốt hơn.
- Thông tin chính xác, nhanh chóng, hữu hiệu dựa vào crawl dữ liệu.
Hạn chế của crawl dữ liệu
- Các phần mềm sử dụng crawl dữ liệu sẽ luôn tồn tại các rủi ro mà bạn khó có thể tránh khỏi.
- Đối với những trường hợp website cần lấy thông tin để thực hiện thay đổi cấu trúc HTML, bạn sẽ phải cập nhật đểcrawl dữ liệu có thể phù hợp với sự thay đổi của website.
Quá trình crawl dữ liệu
- Quá trình Crawling sẽ được bắt đầu ngay khi công cụ tìm kiếm (SE – Search Engine) phát hiện thấy một liên kết nào đó trên hệ thống của nó.
- SE sẽ khởi động quá trình thu thập website, thu thập thông tin dựa vào đường liên kết đó.
- Trong trang đích, SE sẽ xuất hiện những liên kết mới, Crawler được nhân đôi để có thể tăng được quá trình thu thập hiện tại với 1 lượt Crawl Data. Quá trình này sẽ được lặp đi lặp lại đến khi các dữ liệu, thông tin được thu thập hết.
- Quá trình Crawl Data sẽ tiêu tốn nhiều tài nguyên của công cụ tìm kiếm. Vì vậy, các Search Engine thường sẽ cập nhật các thuật toán (web crawler) thường xuyên. Bạn cũng nên lưu ý, SE chỉ nhận giá trị duy nhất từ link đầu tiên, những link nội bộ (internal link) sẽ không có giá trị trong quá trình thu thập dữ liệu.
# Installation

```
npm install axios cheerio request-promise zingmp3-api
```
# Run source
```
node server.js
```
# Read data
data.json: Danh sách tuyển dụng việc làm và thông tin tuyển dụng trên https://123job.vn/tuyen-dung.

pokemon.json: Danh sách các mặt hàng trên pokemon shop.
