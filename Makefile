# BACKEND MICROSERVICE --
run-gateway: 
	cd backend/api-gateway && yarn && yarn start

run-authorization:
	cd backend/authorization && go build && ./authorization

run-dashboard:
	cd backend/dashboard && go build && ./dashboard

run-employee:
	cd backend/employee && go build && ./employee

run-mailer:
	cd backend/mailer && go build && ./mailer

run-review:
	cd backend/review && go build && ./review

# FRONTEND --
run-frontend:
	cd frontend && yarn && yarn start