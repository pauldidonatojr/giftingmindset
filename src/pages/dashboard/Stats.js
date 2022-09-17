
import '../../assets/css/dashboard.css';

const Stats = () => {

  return (
    <section id="middle">
  <header id="page-header">
          <h1>Dashboard</h1>
  </header>
  <div id="content" class="dashboard padding-20">
    <div class="row">
		<div class="col-md-4">
			<div class="dbox dbox--color-2">
				<div class="dbox__icon">
					<i class="glyphicon glyphicon-check"></i>
				</div>
				<div class="dbox__body">
					<span class="dbox__count"></span>
					<span class="dbox__title"><strong>Joined Today</strong></span>
				</div>				
			</div>
		</div>
		<div class="col-md-4">
			<div class="dbox dbox--color-2">
				<div class="dbox__icon">
					<i class="glyphicon glyphicon-ban-circle"></i>
				</div>
				<div class="dbox__body">
					<span class="dbox__count"></span>
					<span class="dbox__title"><strong>Active Ids</strong></span>
				</div>		
			</div>
		</div>
        <div class="col-md-4">
			<div class="dbox dbox--color-3">
				<div class="dbox__icon">
					<i class="glyphicon glyphicon-ban-circle"></i>
				</div>
				<div class="dbox__body">
					<span class="dbox__count"></span>
					<span class="dbox__title"><strong>Total Users</strong></span>
				</div>
			</div>
		</div>
        <div class="col-md-4">
			<div class="dbox dbox--color-3">
				<div class="dbox__icon">
					<i class="glyphicon glyphicon-ban-circle"></i>
				</div>
				<div class="dbox__body">
					<span class="dbox__count"></span>
					<span class="dbox__title"><strong>Total Investment </strong></span>
				</div>
				
								
			</div>
		</div>
    </div>
  </div>
</section>
    
  );
};
export default Stats;
